function isValidString(value) {
	if (!value || value.length === 0) {
		return false;
	}

	return value !== null && value !== undefined && typeof value === 'string';
}

export {
	isValidString
};
