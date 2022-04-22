// Dependencies
import { describe, it, expect, vi } from 'vitest';

// Library
import TawkMessenger from '../../src/lib';

// Utilities
import { loadScript } from '../../src/utils/widget';

describe('Tawk-messenger Library', () => {
	describe('Set the properties value', () => {
		it('Should set empty properties', () => {
			const tawkMessenger = new TawkMessenger(TawkMessenger, {});

			expect(tawkMessenger).toEqual(
				expect.not.objectContaining({
					app : TawkMessenger,
					propertyId : undefined,
					widgetId : undefined,
					embedId : undefined,
					customStyle : undefined,
					basePath : undefined
				})
			);
		});

		it('Should set empty properties', () => {
			const tawkMessenger = new TawkMessenger(TawkMessenger, {
				propertyId : 'property_id',
				widgetId : 'widget_id'
			});

			expect(tawkMessenger).toEqual(
				expect.objectContaining({
					app : TawkMessenger,
					propertyId : 'property_id',
					widgetId : 'widget_id',
					embedId : undefined,
					customStyle : undefined,
					basePath : undefined
				})
			);
		});
	});

	describe('Embed widget', () => {
		it('Should request TawkMessenger script', () => {
			const tawkMessenger = new TawkMessenger(TawkMessenger,
				{ 
					propertyId : 'property_id',
					widgetId : 'widget_id',
					embedId : 'embed_id'
				}
			);
			
			vi.spyOn(tawkMessenger, 'init');

			tawkMessenger.load();

			expect(loadScript).toHaveBeenCalledWith({
				propertyId : 'property_id',
				widgetId : 'widget_id',
				embedId : 'embed_id'
			});
		});
	});
});