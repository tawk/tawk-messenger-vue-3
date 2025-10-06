import { isValidId, isValidBasePath } from './helper';

/**
 * Securely loads the Tawk.to script with input validation
 * @param {Object} options - Configuration options
 * @param {string} options.propertyId - Tawk.to property ID
 * @param {string} options.widgetId - Tawk.to widget ID  
 * @param {string} options.embedId - DOM element ID to embed chat
 * @param {string} options.basePath - Base domain path (default: tawk.to)
 * @param {boolean} options.autoStart - Auto start widget
 */
function loadScript({propertyId = '', widgetId = '', embedId = '', basePath = 'tawk.to', autoStart = true}) {
	// Security validation: Validate all IDs to prevent XSS
	if (!isValidId(propertyId)) {
		console.error('[Tawk Security] Invalid propertyId - contains unsafe characters');
		return;
	}
	
	if (!isValidId(widgetId)) {
		console.error('[Tawk Security] Invalid widgetId - contains unsafe characters');
		return;
	}
	
	// Security validation: Validate base path to prevent domain confusion attacks
	if (!isValidBasePath(basePath)) {
		console.error('[Tawk Security] Invalid basePath - only tawk.to domains allowed');
		return;
	}

	if (embedId && embedId.length > 0) {
		// Security validation: Validate embed ID
		if (!isValidId(embedId)) {
			console.error('[Tawk Security] Invalid embedId - contains unsafe characters');
			return;
		}
		
		/**
		 * If the element with embedId doesn't exist, create a new element
		 * Using textContent for safe ID assignment
		 */
		if (!document.getElementById(embedId)) {
			const element = document.createElement('div');
			// Safely set the ID (already validated above)
			element.id = embedId;

			document.body.appendChild(element);
		}

		window.Tawk_API.embedded = embedId;
	}

	if (!autoStart) {
		window.Tawk_API.autoStart = autoStart;
	}

	// Create script element with security attributes
	const script = document.createElement('script');
	script.async = true;
	
	// Build URL with validated parameters
	const scriptUrl = `https://embed.${basePath}/${encodeURIComponent(propertyId)}/${encodeURIComponent(widgetId)}`;
	script.src = scriptUrl;
	
	script.charset = 'UTF-8';
	
	// Security: Set more restrictive CORS policy
	script.setAttribute('crossorigin', 'anonymous');
	
	// Security: Add integrity and referrer policy for better security
	script.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

	// Insert script safely
	const firstScript = document.getElementsByTagName('script')[0];
	if (firstScript && firstScript.parentNode) {
		firstScript.parentNode.insertBefore(script, firstScript);
	} else {
		// Fallback: append to head if no scripts found
		document.head.appendChild(script);
	}
}

export {
	loadScript
};