interface LoadScriptOptions {
	propertyId?: string;
	widgetId?: string;
	embedId?: string;
	basePath?: string;
	autoStart?: boolean;
}

function loadScript({
	propertyId = '',
	widgetId = '',
	embedId = '',
	basePath = 'tawk.to',
	autoStart = true
}: LoadScriptOptions): void {
	if (embedId.length) {
		/**
		 * If the element with embedId as id we will create a new element
		 */
		if (!document.getElementById(embedId)) {
			const element = document.createElement('div');
			element.id = embedId;

			document.body.appendChild(element);
		}

		window.Tawk_API.embedded = embedId;
	}

	if (!autoStart) {
		window.Tawk_API.autoStart = autoStart;
	}

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://embed.${basePath}/${propertyId}/${widgetId}`;
	script.charset = 'UTF-8';
	script.setAttribute('crossorigin', '*');

	const firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);
}

export {
	loadScript
};

export type {
	LoadScriptOptions
};
