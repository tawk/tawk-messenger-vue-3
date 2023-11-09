// Utilities
import { loadScript } from '../utils/widget';
import { isValidString } from '../utils/helper';

class TawkMessenger {
	constructor(app, options) {
		if (!isValidString(options.propertyId)) {
			return;
		}

		if (!isValidString(options.widgetId)) {
			return;
		}

		this.app = app;
		this.propertyId = options.propertyId;
		this.widgetId = options.widgetId;
		this.embedId = options.embedId;
		this.customStyle = options.customStyle;
		this.basePath = options.basePath;

		this.load();
	}

	load() {
		if (!window || !document) {
			return;
		}

		/**
		 * Set placeholder
		 */
		window.Tawk_API = window.Tawk_API || {};
		window.Tawk_LoadStart = new Date();

		/**
		 * Inject the Tawk script
		 */
		loadScript({
			propertyId : this.propertyId,
			widgetId : this.widgetId,
			embedId : this.embedId,
			basePath : this.basePath
		});

		this.init();
	}

	init() {
		if (this.customStyle && typeof this.customStyle === 'object') {
			window.Tawk_API.customStyle = this.customStyle;
		}

		if (typeof this.app !== 'object') {
			return;
		}

		/**
		 * Provide the APIs
		 */
		this.provideActions();
		this.provideGetters();
		this.provideListeners();
		this.provideSetters();
	}

	/**
	 * API for calling an action on the widget
	 */
	provideActions() {
		this.app.provide('start', () => {
			window.Tawk_API.start();
		});

		this.app.provide('shutdown', () => {
			window.Tawk_API.shutdown();
		});

		this.app.provide('maximize', () => {
			window.Tawk_API.maximize();
		});

		this.app.provide('minimize', () => {
			window.Tawk_API.minimize();
		});

		this.app.provide('toggle', () => {
			window.Tawk_API.toggle();
		});

		this.app.provide('popup', () => {
			window.Tawk_API.popup();
		});

		this.app.provide('showWidget', () => {
			window.Tawk_API.showWidget();
		});

		this.app.provide('hideWidget', () => {
			window.Tawk_API.hideWidget();
		});

		this.app.provide('toggleVisibility', () => {
			window.Tawk_API.toggleVisibility();
		});

		this.app.provide('endChat', () => {
			window.Tawk_API.endChat();
		});
	}

	/**
	 * API for returning a data
	 */
	provideGetters() {
		this.app.provide('getWindowType', () => {
			return window.Tawk_API.getWindowType();
		});

		this.app.provide('getStatus', () => {
			return window.Tawk_API.getStatus();
		});

		this.app.provide('isChatMaximized', () => {
			return window.Tawk_API.isChatMaximized();
		});

		this.app.provide('isChatMinimized', () => {
			return window.Tawk_API.isChatMinimized();
		});

		this.app.provide('isChatHidden', () => {
			return window.Tawk_API.isChatHidden();
		});

		this.app.provide('isChatOngoing', () => {
			return window.Tawk_API.isChatOngoing();
		});

		this.app.provide('isVisitorEngaged', () => {
			return window.Tawk_API.isVisitorEngaged();
		});

		this.app.provide('onLoaded', () => {
			return window.Tawk_API.onLoaded;
		});

		this.app.provide('onBeforeLoaded', () => {
			return window.Tawk_API.onBeforeLoaded;
		});

		this.app.provide('widgetPosition', () => {
			return window.Tawk_API.widgetPosition();
		});
	}

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	provideListeners() {
		this.app.provide('onLoad', (callback) => {
			window.addEventListener('tawkLoad', () => {
				callback();
			});
		});

		this.app.provide('onStatusChange', (callback) => {
			window.addEventListener('tawkStatusChange', (status) => {
				callback(status.detail);
			});
		});

		this.app.provide('onBeforeLoad', (callback) => {
			window.addEventListener('tawkBeforeLoad', () => {
				callback();
			});
		});

		this.app.provide('onChatMaximized', (callback) => {
			window.addEventListener('tawkChatMaximized', () => {
				callback();
			});
		});

		this.app.provide('onChatMinimized', (callback) => {
			window.addEventListener('tawkChatMinimized', () => {
				callback();
			});
		});

		this.app.provide('onChatHidden', (callback) => {
			window.addEventListener('tawkChatHidden', () => {
				callback();
			});
		});

		this.app.provide('onChatStarted', (callback) => {
			window.addEventListener('tawkChatStarted', () => {
				callback();
			});
		});

		this.app.provide('onChatEnded', (callback) => {
			window.addEventListener('tawkChatEnded', () => {
				callback();
			});
		});

		this.app.provide('onPrechatSubmit', (callback) => {
			window.addEventListener('tawkPrechatSubmit', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('onOfflineSubmit', (callback) => {
			window.addEventListener('tawkOfflineSubmit', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('onChatMessageVisitor', (callback) => {
			window.addEventListener('tawkChatMessageVisitor', (message) => {
				callback(message.detail);
			});
		});

		this.app.provide('onChatMessageAgent', (callback) => {
			window.addEventListener('tawkChatMessageAgent', (message) => {
				callback(message.detail);
			});
		});

		this.app.provide('onChatMessageSystem', (callback) => {
			window.addEventListener('tawkChatMessageSystem', (message) => {
				callback(message.detail);
			});
		});

		this.app.provide('onAgentJoinChat', (callback) => {
			window.addEventListener('tawkAgentJoinChat', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('onAgentLeaveChat', (callback) => {
			window.addEventListener('tawkAgentLeaveChat', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('onChatSatisfaction', (callback) => {
			window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
				callback(satisfaction.detail);
			});
		});

		this.app.provide('onVisitorNameChanged', (callback) => {
			window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
				callback(visitorName.detail);
			});
		});

		this.app.provide('onFileUpload', (callback) => {
			window.addEventListener('tawkFileUpload', (link) => {
				callback(link.detail);
			});
		});

		this.app.provide('onTagsUpdated', (callback) => {
			window.addEventListener('tawkTagsUpdated', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('onUnreadCountChanged', (callback) => {
			window.addEventListener('tawkUnreadCountChanged', (data) => {
				callback(data.detail);
			});
		});
	}

	/**
	 * API for setting a data on the widget
	 */
	provideSetters() {
		this.app.provide('autoStart', (enable) => {
			window.Tawk_API.autoStart = enable;
		});

		this.app.provide('visitor', (data) => {
			window.Tawk_API.visitor = data;
		});

		this.app.provide('setAttributes', (attribute, callback) => {
			window.Tawk_API.setAttributes(attribute, callback);
		});

		this.app.provide('addEvent', (event, metadata, callback) => {
			window.Tawk_API.addEvent(event, metadata, callback);
		});

		this.app.provide('addTags', (tags, callback) => {
			window.Tawk_API.addTags(tags, callback);
		});

		this.app.provide('removeTags', (tags, callback) => {
			window.Tawk_API.removeTags(tags, callback);
		});
	}
}

export default TawkMessenger;
