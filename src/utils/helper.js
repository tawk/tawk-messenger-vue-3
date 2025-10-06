/**
 * Validates if a value is a valid, non-empty string
 * @param {*} value - The value to validate
 * @returns {boolean} - True if valid string, false otherwise
 */
function isValidString(value) {
	if (!value || value.length === 0) {
		return false;
	}

	return value !== null && value !== undefined && typeof value === 'string';
}

/**
 * Validates if a string is a valid ID (alphanumeric with allowed special chars)
 * Prevents XSS and injection attacks through ID parameters
 * @param {string} id - The ID to validate
 * @returns {boolean} - True if valid ID, false otherwise
 */
function isValidId(id) {
	if (!isValidString(id)) {
		return false;
	}
	
	// Only allow alphanumeric, hyphens, underscores, and dots
	// This prevents script injection through IDs
	const validIdRegex = /^[a-zA-Z0-9._-]+$/;
	return validIdRegex.test(id) && id.length <= 100; // Reasonable length limit
}

/**
 * Validates if a base path is safe to use
 * Prevents domain confusion attacks
 * @param {string} basePath - The base path to validate
 * @returns {boolean} - True if valid base path, false otherwise
 */
function isValidBasePath(basePath) {
	if (!isValidString(basePath)) {
		return false;
	}
	
	// Only allow tawk.to domain or subdomains
	// This prevents loading scripts from malicious domains
	const validDomainRegex = /^[a-zA-Z0-9.-]*tawk\.to$/;
	return validDomainRegex.test(basePath);
}

export {
	isValidString,
	isValidId,
	isValidBasePath
};
