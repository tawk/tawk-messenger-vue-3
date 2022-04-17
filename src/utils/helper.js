function isValidString(value) {
	if (!value || value.length === 0) {
		return false;
	}

	return value !== null && value !== undefined && typeof value === 'string';
}

function isValidFunction(func) {
	if (!func) {
		return false;
	}

	return func !== null && func !== undefined && typeof func === 'function';
}

function isEmittable(app, name) {
	if (app._component &&
		(app._component.emits && typeof app._component.emits === 'object')) {
		return isValidFunction(app._component.emits[name]);
	}

	return false;
}

export {
	isValidString,
	isValidFunction,
	isEmittable
};