// Library
import TawkMessenger from './lib/index';

// Utilities
import { isValidString } from './utils/helper';

export default {
	install: (app, options = {}) => {
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
}