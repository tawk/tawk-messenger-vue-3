import type { TawkAPI } from './index';

declare global {
	interface Window {
		Tawk_API: TawkAPI;
		Tawk_LoadStart: Date;
	}
}

export {};
