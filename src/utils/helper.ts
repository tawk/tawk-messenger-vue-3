function isValidString(value: unknown): boolean {
	if (!value || typeof value !== 'string' || value.length === 0) {
		return false;
	}

	return true;
}

export {
	isValidString
};
