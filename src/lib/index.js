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
		this.autoStart = options.autoStart;
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
			basePath : this.basePath,
			autoStart : this.autoStart
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
		this.app.provide('tawkStart', () => {
			window.Tawk_API.start();
		});

		this.app.provide('tawkShutdown', () => {
			window.Tawk_API.shutdown();
		});

		this.app.provide('tawkMaximize', () => {
			window.Tawk_API.maximize();
		});

		this.app.provide('tawkMinimize', () => {
			window.Tawk_API.minimize();
		});

		this.app.provide('tawkToggle', () => {
			window.Tawk_API.toggle();
		});

		this.app.provide('tawkPopup', () => {
			window.Tawk_API.popup();
		});

		this.app.provide('tawkShowWidget', () => {
			window.Tawk_API.showWidget();
		});

		this.app.provide('tawkHideWidget', () => {
			window.Tawk_API.hideWidget();
		});

		this.app.provide('tawkToggleVisibility', () => {
			window.Tawk_API.toggleVisibility();
		});

		this.app.provide('tawkEndChat', () => {
			window.Tawk_API.endChat();
		});
	}

	/**
	 * API for returning a data
	 */
	provideGetters() {
		this.app.provide('tawkGetWindowType', () => {
			return window.Tawk_API.getWindowType();
		});

		this.app.provide('tawkGetStatus', () => {
			return window.Tawk_API.getStatus();
		});

		this.app.provide('tawkIsChatMaximized', () => {
			return window.Tawk_API.isChatMaximized();
		});

		this.app.provide('tawkIsChatMinimized', () => {
			return window.Tawk_API.isChatMinimized();
		});

		this.app.provide('tawkIsChatHidden', () => {
			return window.Tawk_API.isChatHidden();
		});

		this.app.provide('tawkIsChatOngoing', () => {
			return window.Tawk_API.isChatOngoing();
		});

		this.app.provide('tawkIsVisitorEngaged', () => {
			return window.Tawk_API.isVisitorEngaged();
		});

		this.app.provide('tawkOnLoaded', () => {
			return window.Tawk_API.onLoaded;
		});

		this.app.provide('tawkOnBeforeLoaded', () => {
			return window.Tawk_API.onBeforeLoaded;
		});

		this.app.provide('tawkWidgetPosition', () => {
			return window.Tawk_API.widgetPosition();
		});
	}

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	provideListeners() {
		this.app.provide('tawkOnLoad', (callback) => {
			window.addEventListener('tawkLoad', () => {
				callback();
			});
		});

		this.app.provide('tawkOnStatusChange', (callback) => {
			window.addEventListener('tawkStatusChange', (status) => {
				callback(status.detail);
			});
		});

		this.app.provide('tawkOnBeforeLoad', (callback) => {
			window.addEventListener('tawkBeforeLoad', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatMaximized', (callback) => {
			window.addEventListener('tawkChatMaximized', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatMinimized', (callback) => {
			window.addEventListener('tawkChatMinimized', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatHidden', (callback) => {
			window.addEventListener('tawkChatHidden', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatStarted', (callback) => {
			window.addEventListener('tawkChatStarted', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatEnded', (callback) => {
			window.addEventListener('tawkChatEnded', () => {
				callback();
			});
		});

		this.app.provide('tawkOnPrechatSubmit', (callback) => {
			window.addEventListener('tawkPrechatSubmit', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('tawkOnOfflineSubmit', (callback) => {
			window.addEventListener('tawkOfflineSubmit', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('tawkOnChatMessageVisitor', (callback) => {
			window.addEventListener('tawkChatMessageVisitor', (message) => {
				callback(message.detail);
			});
		});

		this.app.provide('tawkOnChatMessageAgent', (callback) => {
			window.addEventListener('tawkChatMessageAgent', (message) => {
				callback(message.detail);
			});
		});

		this.app.provide('tawkOnChatMessageSystem', (callback) => {
			window.addEventListener('tawkChatMessageSystem', (message) => {
				callback(message.detail);
			});
		});

		this.app.provide('tawkOnAgentJoinChat', (callback) => {
			window.addEventListener('tawkAgentJoinChat', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('tawkOnAgentLeaveChat', (callback) => {
			window.addEventListener('tawkAgentLeaveChat', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('tawkOnChatSatisfaction', (callback) => {
			window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
				callback(satisfaction.detail);
			});
		});

		this.app.provide('tawkOnVisitorNameChanged', (callback) => {
			window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
				callback(visitorName.detail);
			});
		});

		this.app.provide('tawkOnFileUpload', (callback) => {
			window.addEventListener('tawkFileUpload', (link) => {
				callback(link.detail);
			});
		});

		this.app.provide('tawkOnTagsUpdated', (callback) => {
			window.addEventListener('tawkTagsUpdated', (data) => {
				callback(data.detail);
			});
		});

		this.app.provide('tawkOnUnreadCountChanged', (callback) => {
			window.addEventListener('tawkUnreadCountChanged', (data) => {
				callback(data.detail);
			});
		});
	}

	/**
	 * API for setting a data on the widget
	 */
	provideSetters() {
		this.app.provide('tawkVisitor', (data) => {
			window.Tawk_API.visitor = data;
		});

		this.app.provide('tawkSetAttributes', (attribute, callback) => {
			window.Tawk_API.setAttributes(attribute, callback);
		});

		this.app.provide('tawkAddEvent', (event, metadata, callback) => {
			window.Tawk_API.addEvent(event, metadata, callback);
		});

		this.app.provide('tawkAddTags', (tags, callback) => {
			window.Tawk_API.addTags(tags, callback);
		});

		this.app.provide('tawkRemoveTags', (tags, callback) => {
			window.Tawk_API.removeTags(tags, callback);
		});

		this.app.provide('tawkSwitchWidget', (data, callback) => {
			window.Tawk_API.switchWidget(data, callback);
		});
	}
}

export default TawkMessenger;
