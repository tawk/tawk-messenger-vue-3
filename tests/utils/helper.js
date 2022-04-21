// Dependencies
import { createApp } from 'vue';

// Library
import TawkMessengerVue from '../../src/index';

function setupApp(options) {
	const app = createApp({
		template: '<div></div>'
	});

	/**
	 * Mount vue
	 */
	app.mount(document.createElement('div'));

	/**
	 * Set to use the TawkMessengerVue
	 */
	app.use(TawkMessengerVue, options);

	/**
	 * Return the instance
	 */
	return app;
};

export {
	setupApp
};