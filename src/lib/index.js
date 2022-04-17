// Utilities
import { loadScript } from '../utils/widget';
import { isValidString, isEmittable } from '../utils/helper';

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

		this.emit = app._component.emits;

		this.load();

		console.log(app);
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

		/**
		 * Map the APIs
		 */
		this.mapActions();
		this.mapGetters();
		this.mapListeners();
		this.mapSetters();
	}

	/**
	 * API for calling an action on the widget
	 */
	mapActions() {
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
	mapGetters() {
		this.app.provide('getWindowType', () => {
			window.Tawk_API.getWindowType();
		});

		this.app.provide('getStatus', () => {
			window.Tawk_API.getStatus();
		});

		this.app.provide('isChatMaximized', () => {
			window.Tawk_API.isChatMaximized();
		});

		this.app.provide('isChatMinimized', () => {
			window.Tawk_API.isChatMinimized();
		});

		this.app.provide('isCHatHidden', () => {
			window.Tawk_API.isCHatHidden();
		});

		this.app.provide('isChatOngoing', () => {
			window.Tawk_API.isChatOngoing();
		});

		this.app.provide('isVisitorEngaged', () => {
			window.Tawk_API.isVisitorEngaged();
		});

		this.app.provide('onLoaded', () => {
			window.Tawk_API.onLoaded;
		});

		this.app.provide('onBeforeLoaded', () => {
			window.Tawk_API.onBeforeLoaded;
		});

		this.app.provide('widgetPosition', () => {
			window.Tawk_API.widgetPosition();
		});
	}

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	mapListeners() {
		window.addEventListener('tawkLoad', () => {
			if (isEmittable(this.app, 'load')) {
				this.emit.load();
			}
		});

		window.addEventListener('tawkStatusChange', (status) => {
			if (isEmittable(this.app, 'statusChange')) {
				this.emit.statusChange(status.detail);
			}
		});

		window.addEventListener('tawkBeforeLoad', () => {
			if (isEmittable(this.app, 'beforeLoad')) {
				this.emit.beforeLoad();
			}
		});

		window.addEventListener('tawkChatMaximized', () => {
			if (isEmittable(this.app, 'chatMaximized')) {
				this.emit.chatMaximized();
			}
		});

		window.addEventListener('tawkChatMinimized', () => {
			if (isEmittable(this.app, 'chatMinimized')) {
				this.emit.chatMinimized();
			}
		});

		window.addEventListener('tawkChatHidden', () => {
			if (isEmittable(this.app, 'chatHidden')) {
				this.emit.chatHidden();
			}
		});

		window.addEventListener('tawkChatStarted', () => {
			if (isEmittable(this.app, 'chatStarted')) {
				this.emit.chatStarted();
			}
		});

		window.addEventListener('tawkChatEnded', () => {
			if (isEmittable(this.app, 'chatEnded')) {
				this.emit.chatEnded();
			}
		});

		window.addEventListener('tawkPrechatSubmit', (data) => {
			if (isEmittable(this.app, 'prechatSubmit')) {
				this.emit.prechatSubmit(data.detail);
			}
		});

		window.addEventListener('tawkOfflineSubmit', (data) => {
			if (isEmittable(this.app, 'offlineSubmit')) {
				this.emit.offlineSubmit(data.detail);
			}
		});
		
		window.addEventListener('tawkChatMessageVisitor', (message) => {
			if (isEmittable(this.app, 'chatMessageVisitor')) {
				this.emit.chatMessageVisitor(message.detail);
			}
		});

		window.addEventListener('tawkChatMessageAgent', (message) => {
			if (isEmittable(this.app, 'chatMessageAgent')) {
				this.emit.chatMessageAgent(message.detail);
			}
		});

		window.addEventListener('tawkChatMessageSystem', (message) => {
			if (isEmittable(this.app, 'chatMessageSystem')) {
				this.emit.chatMessageSystem(message.detail);
			}
		});

		window.addEventListener('tawkAgentJoinChat', (data) => {
			if (isEmittable(this.app, 'agentJoinChat')) {
				this.emit.agentJoinChat(data.detail);
			}
		});
		
		window.addEventListener('tawkAgentLeaveChat', (data) => {
			if (isEmittable(this.app, 'agentLeaveChat')) {
				this.emit.agentLeaveChat(data.detail);
			}
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
			if (isEmittable(this.app, 'chatSatisfaction')) {
				this.emit.chatSatisfaction(satisfaction.detail);
			}
		});
		
		window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
			if (isEmittable(this.app, 'visitorNameChanged')) {
				this.emit.visitorNameChanged(visitorName.detail);
			}
		});

		window.addEventListener('tawkFileUpload', (link) => {
			if (isEmittable(this.app, 'fileUpload')) {
				this.emit.fileUpload(link.detail);
			}
		});

		window.addEventListener('tawkTagsUpdated', (data) => {
			if (isEmittable(this.app, 'tagsUpdated')) {
				this.emit.tagsUpdated(data.detail);
			}
		});

		window.addEventListener('tawkUnreadCountChanged', (data) => {
			if (isEmittable(this.app, 'unreadCountChanged')) {
				this.emit.unreadCountChanged(data.detail);
			}
		});
	}

	/**
	 * API for setting a data on the widget
	 */
	 mapSetters() {
		this.app.provide('visitor', (data) => {
			window.Tawk_API.visitor(data);
		});

		this.app.provide('setAttributs', (attribute, callback) => {
			window.Tawk_API.setAttributs(attribute, callback);
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