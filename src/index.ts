import type { App, Plugin } from 'vue';
import type { TawkPluginOptions } from './types/index';

// Library
import TawkMessenger from './lib/index';

// Utilities
import { isValidString } from './utils/helper';

const TawkMessengerVue: Plugin = {
	install(app: App, options: TawkPluginOptions = {} as TawkPluginOptions) {
		if (!isValidString(options.propertyId)) {
			console.error('[Tawk-messenger-vue warn]: You didn\'t specified \'propertyId\' property in the plugin.');
			return;
		}

		if (!isValidString(options.widgetId)) {
			console.error('[Tawk-messenger-vue warn]: You didn\'t specified \'widgetId\' property in the plugin.');
			return;
		}

		new TawkMessenger(app, options);
	}
};

export default TawkMessengerVue;
