// Dependencies
import { describe, it, expect } from 'vitest';

// Utilities
import { setupApp } from '../utils/helper';

describe('Tawk-messenger features', () => {
	const app = setupApp({
		propertyId : 'property_id',
		widgetId : 'widget_id'
	});

	const provides = app._context.provides;

	describe('Set default global properties', () => {
		it('Should set Tawk_API', () => {
			expect(typeof window.Tawk_API === 'object').toBe(true);
		});

		it('Should set Tawk_LoadStart', () => {
			expect(window.Tawk_LoadStart instanceof Date).toBe(true);
		});
	});

	describe('Plugin Provides', () => {
		it('Should provide action functions', () => {
			expect(typeof provides.maximize === 'function').toBe(true);
			expect(typeof provides.minimize === 'function').toBe(true);
			expect(typeof provides.toggle === 'function').toBe(true);
			expect(typeof provides.popup === 'function').toBe(true);
			expect(typeof provides.showWidget === 'function').toBe(true);
			expect(typeof provides.hideWidget === 'function').toBe(true);
			expect(typeof provides.toggleVisibility === 'function').toBe(true);
			expect(typeof provides.endChat === 'function').toBe(true);
		});

		it('Should provide getters functions', () => {
			expect(typeof provides.getWindowType === 'function').toBe(true);
			expect(typeof provides.getStatus === 'function').toBe(true);
			expect(typeof provides.isChatMaximized === 'function').toBe(true);
			expect(typeof provides.isChatMinimized === 'function').toBe(true);
			expect(typeof provides.isChatHidden === 'function').toBe(true);
			expect(typeof provides.isChatOngoing === 'function').toBe(true);
			expect(typeof provides.isVisitorEngaged === 'function').toBe(true);
			expect(typeof provides.onLoaded === 'function').toBe(true);
			expect(typeof provides.onBeforeLoaded === 'function').toBe(true);
			expect(typeof provides.widgetPosition === 'function').toBe(true);
		});

		it('Should provide listeners functions', () => {
			it('Should add tawkLoad event listener', () => {
				expect(typeof provides.onLoad === 'function').toBe(true);

				provides.onLoad(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkLoad', expect.any(Function));
			});

			it('Should add tawkStatusChange event listener', () => {
				expect(typeof provides.onStatusChange === 'function').toBe(true);

				provides.onStatusChange(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkStatusChange', expect.any(Function));
			});

			it('Should add tawkBeforeLoad event listener', () => {
				expect(typeof provides.onBeforeLoad === 'function').toBe(true);

				provides.onBeforeLoad(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkBeforeLoad', expect.any(Function));
			});

			it('Should add tawkChatMaximized event listener', () => {
				expect(typeof provides.onChatMaximized === 'function').toBe(true);

				provides.onChatMaximized(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMaximized', expect.any(Function));
			});

			it('Should add tawkChatMinimized event listener', () => {
				expect(typeof provides.onChatMinimized === 'function').toBe(true);

				provides.onChatMinimized(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMinimized', expect.any(Function));
			});
			
			it('Should add tawkChatHidden event listener', () => {
				expect(typeof provides.onChatHidden === 'function').toBe(true);

				provides.onChatHidden(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatHidden', expect.any(Function));
			});

			it('Should add tawkChatStarted event listener', () => {
				expect(typeof provides.onChatStarted === 'function').toBe(true);

				provides.onChatStarted(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatStarted', expect.any(Function));
			});
			
			it('Should add tawkChatEnded event listener', () => {
				expect(typeof provides.onChatEnded === 'function').toBe(true);

				provides.onChatEnded(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatEnded', expect.any(Function));
			});

			it('Should add tawkPrechatSubmit event listener', () => {
				expect(typeof provides.onPrechatSubmit === 'function').toBe(true);

				provides.onPrechatSubmit(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkPrechatSubmit', expect.any(Function));
			});

			it('Should add tawkOfflineSubmit event listener', () => {
				expect(typeof provides.onOfflineSubmit === 'function').toBe(true);

				provides.onOfflineSubmit(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkOfflineSubmit', expect.any(Function));
			});

			it('Should add tawkChatMessageVisitor event listener', () => {
				expect(typeof provides.onChatMessageVisitor === 'function').toBe(true);

				provides.onChatMessageVisitor(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageVisitor', expect.any(Function));
			});

			it('Should add tawkChatMessageAgent event listener', () => {
				expect(typeof provides.onChatMessageAgent === 'function').toBe(true);

				provides.onChatMessageAgent(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageAgent', expect.any(Function));
			});
			
			it('Should add tawkChatMessageSystem event listener', () => {
				expect(typeof provides.onChatMessageSystem === 'function').toBe(true);

				provides.onChatMessageSystem(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageSystem', expect.any(Function));
			});
			
			it('Should add tawkAgentJoinChat event listener', () => {
				expect(typeof provides.onAgentJoinChat === 'function').toBe(true);

				provides.onAgentJoinChat(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentJoinChat', expect.any(Function));
			});

			it('Should add tawkAgentLeaveChat event listener', () => {
				expect(typeof provides.onAgentJoinChat === 'function').toBe(true);

				provides.onAgentJoinChat(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentLeaveChat', expect.any(Function));
			});
			
			it('Should add tawkChatSatisfaction event listener', () => {
				expect(typeof provides.onChatSatisfaction === 'function').toBe(true);

				provides.onChatSatisfaction(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatSatisfaction', expect.any(Function));
			});
			
			it('Should add tawkVisitorNameChanged event listener', () => {
				expect(typeof provides.onVisitorNameChanged === 'function').toBe(true);

				provides.onVisitorNameChanged(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkVisitorNameChanged', expect.any(Function));
			});

			it('Should add tawkFileUpload event listener', () => {
				expect(typeof provides.onFileUpload === 'function').toBe(true);

				provides.onFileUpload(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkFileUpload', expect.any(Function));
			});
			
			it('Should add tawkTagsUpdated event listener', () => {
				expect(typeof provides.onTagsUpdated === 'function').toBe(true);

				provides.onTagsUpdated(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkTagsUpdated', expect.any(Function));
			});
			
			it('Should add tawkUnreadCountChanged event listener', () => {
				expect(typeof provides.onUnreadCountChanged === 'function').toBe(true);

				provides.onUnreadCountChanged(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkUnreadCountChanged', expect.any(Function));
			});
		});

		it('Should provide setter functions', () => {
			expect(typeof provides.visitor === 'function').toBe(true);
			expect(typeof provides.setAttributes === 'function').toBe(true);
			expect(typeof provides.addEvent === 'function').toBe(true);
			expect(typeof provides.addTags === 'function').toBe(true);
			expect(typeof provides.removeTags === 'function').toBe(true);
		});
	});

	app.unmount();
});