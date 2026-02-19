import type {
	TawkPluginOptions,
	TawkCustomStyle,
	TawkCallback,
	TawkErrorCallback,
	TawkSwitchWidgetData,
	TawkVisitorData
} from '../types/index';

// Utilities
import { loadScript } from '../utils/widget';
import { isValidString } from '../utils/helper';

class TawkMessenger {
	app: {};
	propertyId: string;
	widgetId: string;
	embedId: string | undefined;
	autoStart: boolean | undefined;
	customStyle: TawkCustomStyle | undefined;
	basePath: string | undefined;

	constructor(app: {}, options: TawkPluginOptions) {
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

	load(): void {
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

	init(): void {
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
	provideActions(): void {
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
	provideGetters(): void {
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
	 * API for listening to events emitted inside the widget
	 */
	provideListeners(): void {
		this.app.provide('tawkOnLoad', (callback: TawkCallback) => {
			window.addEventListener('tawkLoad', () => {
				callback();
			});
		});

		this.app.provide('tawkOnStatusChange', (callback: (status: string) => void) => {
			window.addEventListener('tawkStatusChange', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnBeforeLoad', (callback: TawkCallback) => {
			window.addEventListener('tawkBeforeLoad', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatMaximized', (callback: TawkCallback) => {
			window.addEventListener('tawkChatMaximized', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatMinimized', (callback: TawkCallback) => {
			window.addEventListener('tawkChatMinimized', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatHidden', (callback: TawkCallback) => {
			window.addEventListener('tawkOnChatHidden', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatStarted', (callback: TawkCallback) => {
			window.addEventListener('tawkChatStarted', () => {
				callback();
			});
		});

		this.app.provide('tawkOnChatEnded', (callback: TawkCallback) => {
			window.addEventListener('tawkChatEnded', () => {
				callback();
			});
		});

		this.app.provide('tawkOnPrechatSubmit', (callback: (data: Record<string, unknown>) => void) => {
			window.addEventListener('tawkPrechatSubmit', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnOfflineSubmit', (callback: (data: Record<string, unknown>) => void) => {
			window.addEventListener('tawkOfflineSubmit', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnChatMessageVisitor', (callback: (message: string) => void) => {
			window.addEventListener('tawkChatMessageVisitor', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnChatMessageAgent', (callback: (message: string) => void) => {
			window.addEventListener('tawkChatMessageAgent', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnChatMessageSystem', (callback: (message: string) => void) => {
			window.addEventListener('tawkChatMessageSystem', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnAgentJoinChat', (callback: (data: Record<string, unknown>) => void) => {
			window.addEventListener('tawkAgentJoinChat', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnAgentLeaveChat', (callback: (data: Record<string, unknown>) => void) => {
			window.addEventListener('tawkAgentLeaveChat', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnChatSatisfaction', (callback: (satisfaction: number) => void) => {
			window.addEventListener('tawkChatSatisfaction', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnVisitorNameChanged', (callback: (visitorName: string) => void) => {
			window.addEventListener('tawkVisitorNameChanged', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnFileUpload', (callback: (link: string) => void) => {
			window.addEventListener('tawkFileUpload', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnTagsUpdated', (callback: (data: Record<string, unknown>) => void) => {
			window.addEventListener('tawkTagsUpdated', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});

		this.app.provide('tawkOnUnreadCountChanged', (callback: (count: number) => void) => {
			window.addEventListener('tawkUnreadCountChanged', (event: Event) => {
				callback((event as CustomEvent).detail);
			});
		});
	}

	/**
	 * API for setting data on the widget
	 */
	provideSetters(): void {
		this.app.provide('tawkVisitor', (data: TawkVisitorData) => {
			window.Tawk_API.visitor = data;
		});

		this.app.provide('tawkSetAttributes', (
			attribute: Record<string, unknown>,
			callback: TawkErrorCallback
		) => {
			window.Tawk_API.setAttributes(attribute, callback);
		});

		this.app.provide('tawkAddEvent', (
			event: string,
			metadata: Record<string, unknown>,
			callback: TawkErrorCallback
		) => {
			window.Tawk_API.addEvent(event, metadata, callback);
		});

		this.app.provide('tawkAddTags', (tags: string[], callback: TawkErrorCallback) => {
			window.Tawk_API.addTags(tags, callback);
		});

		this.app.provide('tawkRemoveTags', (tags: string[], callback: TawkErrorCallback) => {
			window.Tawk_API.removeTags(tags, callback);
		});

		this.app.provide('tawkSwitchWidget', (data: TawkSwitchWidgetData, callback: TawkCallback) => {
			window.Tawk_API.switchWidget(data, callback);
		});
	}
}

export default TawkMessenger;