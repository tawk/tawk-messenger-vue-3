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
			expect(typeof provides.tawkMaximize === 'function').toBe(true);
			expect(typeof provides.tawkMinimize === 'function').toBe(true);
			expect(typeof provides.tawkToggle === 'function').toBe(true);
			expect(typeof provides.tawkPopup === 'function').toBe(true);
			expect(typeof provides.tawkShowWidget === 'function').toBe(true);
			expect(typeof provides.tawkHideWidget === 'function').toBe(true);
			expect(typeof provides.tawkToggleVisibility === 'function').toBe(true);
			expect(typeof provides.tawkEndChat === 'function').toBe(true);
		});

		it('Should provide getters functions', () => {
			expect(typeof provides.tawkGetWindowType === 'function').toBe(true);
			expect(typeof provides.tawkGetStatus === 'function').toBe(true);
			expect(typeof provides.tawkIsChatMaximized === 'function').toBe(true);
			expect(typeof provides.tawkIsChatMinimized === 'function').toBe(true);
			expect(typeof provides.tawkIsChatHidden === 'function').toBe(true);
			expect(typeof provides.tawkIsChatOngoing === 'function').toBe(true);
			expect(typeof provides.tawkIsVisitorEngaged === 'function').toBe(true);
			expect(typeof provides.tawkOnLoaded === 'function').toBe(true);
			expect(typeof provides.tawkOnBeforeLoaded === 'function').toBe(true);
			expect(typeof provides.tawkWidgetPosition === 'function').toBe(true);
		});

		it('Should provide listeners functions', () => {
			it('Should add tawkLoad event listener', () => {
				expect(typeof provides.tawkOnLoad === 'function').toBe(true);

				provides.tawkOnLoad(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkLoad', expect.any(Function));
			});

			it('Should add tawkStatusChange event listener', () => {
				expect(typeof provides.tawkOnStatusChange === 'function').toBe(true);

				provides.tawkOnStatusChange(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkStatusChange', expect.any(Function));
			});

			it('Should add tawkBeforeLoad event listener', () => {
				expect(typeof provides.tawkOnBeforeLoad === 'function').toBe(true);

				provides.tawkOnBeforeLoad(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkBeforeLoad', expect.any(Function));
			});

			it('Should add tawkChatMaximized event listener', () => {
				expect(typeof provides.tawkOnChatMaximized === 'function').toBe(true);

				provides.tawkOnChatMaximized(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMaximized', expect.any(Function));
			});

			it('Should add tawkChatMinimized event listener', () => {
				expect(typeof provides.tawkOnChatMinimized === 'function').toBe(true);

				provides.tawkOnChatMinimized(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMinimized', expect.any(Function));
			});
			
			it('Should add tawkChatHidden event listener', () => {
				expect(typeof provides.tawkOnChatHidden === 'function').toBe(true);

				provides.tawkOnChatHidden(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatHidden', expect.any(Function));
			});

			it('Should add tawkChatStarted event listener', () => {
				expect(typeof provides.tawkOnChatStarted === 'function').toBe(true);

				provides.tawkOnChatStarted(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatStarted', expect.any(Function));
			});
			
			it('Should add tawkChatEnded event listener', () => {
				expect(typeof provides.tawkOnChatEnded === 'function').toBe(true);

				provides.tawkOnChatEnded(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatEnded', expect.any(Function));
			});

			it('Should add tawkPrechatSubmit event listener', () => {
				expect(typeof provides.tawkOnPrechatSubmit === 'function').toBe(true);

				provides.tawkOnPrechatSubmit(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkPrechatSubmit', expect.any(Function));
			});

			it('Should add tawkOfflineSubmit event listener', () => {
				expect(typeof provides.tawkOnOfflineSubmit === 'function').toBe(true);

				provides.tawkOnOfflineSubmit(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkOfflineSubmit', expect.any(Function));
			});

			it('Should add tawkChatMessageVisitor event listener', () => {
				expect(typeof provides.tawkOnChatMessageVisitor === 'function').toBe(true);

				provides.tawkOnChatMessageVisitor(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageVisitor', expect.any(Function));
			});

			it('Should add tawkChatMessageAgent event listener', () => {
				expect(typeof provides.tawkOnChatMessageAgent === 'function').toBe(true);

				provides.tawkOnChatMessageAgent(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageAgent', expect.any(Function));
			});
			
			it('Should add tawkChatMessageSystem event listener', () => {
				expect(typeof provides.tawkOnChatMessageSystem === 'function').toBe(true);

				provides.tawkOnChatMessageSystem(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatMessageSystem', expect.any(Function));
			});
			
			it('Should add tawkAgentJoinChat event listener', () => {
				expect(typeof provides.tawkOnAgentJoinChat === 'function').toBe(true);

				provides.tawkOnAgentJoinChat(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentJoinChat', expect.any(Function));
			});

			it('Should add tawkAgentLeaveChat event listener', () => {
				expect(typeof provides.tawkOnAgentJoinChat === 'function').toBe(true);

				provides.tawkOnAgentJoinChat(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkAgentLeaveChat', expect.any(Function));
			});
			
			it('Should add tawkChatSatisfaction event listener', () => {
				expect(typeof provides.tawkOnChatSatisfaction === 'function').toBe(true);

				provides.tawkOnChatSatisfaction(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkChatSatisfaction', expect.any(Function));
			});
			
			it('Should add tawkVisitorNameChanged event listener', () => {
				expect(typeof provides.tawkOnVisitorNameChanged === 'function').toBe(true);

				provides.tawkOnVisitorNameChanged(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkVisitorNameChanged', expect.any(Function));
			});

			it('Should add tawkFileUpload event listener', () => {
				expect(typeof provides.tawkOnFileUpload === 'function').toBe(true);

				provides.tawkOnFileUpload(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkFileUpload', expect.any(Function));
			});
			
			it('Should add tawkTagsUpdated event listener', () => {
				expect(typeof provides.tawkOnTagsUpdated === 'function').toBe(true);

				provides.tawkOnTagsUpdated(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkTagsUpdated', expect.any(Function));
			});
			
			it('Should add tawkUnreadCountChanged event listener', () => {
				expect(typeof provides.tawkOnUnreadCountChanged === 'function').toBe(true);

				provides.tawkOnUnreadCountChanged(() => {});
				expect(window.addEventListener).toHaveBeenCalledWith('tawkUnreadCountChanged', expect.any(Function));
			});
		});

		it('Should provide setter functions', () => {
			expect(typeof provides.tawkVisitor === 'function').toBe(true);
			expect(typeof provides.tawkSetAttributes === 'function').toBe(true);
			expect(typeof provides.tawkAddEvent === 'function').toBe(true);
			expect(typeof provides.tawkAddTags === 'function').toBe(true);
			expect(typeof provides.tawkRemoveTags === 'function').toBe(true);
		});
	});

	app.unmount();
});