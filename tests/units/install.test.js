// Dependencies
import { afterEach, afterAll, describe, it, expect } from 'vitest';

// Utilities
import { setupApp } from '../utils/helper';


describe('Install tawk-messenger-vue-3 as plugin', () => {
	afterAll(() => {
		console.error.mockRestore();
	});

	afterEach(() => {
		console.error.mockClear();
	});

	it('Should throw an error for missing `propertyId` option', () => {
		const app = setupApp();

		expect(console.error).toHaveBeenCalledOnce();

		app.unmount();
	});

	it('Should throw an error for missing `widgetId` option', () => {
		const app = setupApp();

		expect(console.error).toHaveBeenCalledOnce();

		app.unmount();
	});

	it('Should not throw an error', () => {
		const app = setupApp({
			propertyId : 'property_id',
			widgetId : 'widget_id'
		});

		expect(console.error).toHaveBeenCalledTimes(0);
		
		app.unmount();
	});
});
