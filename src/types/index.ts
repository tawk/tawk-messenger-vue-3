// ---------------------------------------------------------------------------
// Plugin options
// ---------------------------------------------------------------------------

export interface TawkPluginOptions {
	propertyId: string;
	widgetId: string;
	embedId?: string;
	autoStart?: boolean;
	customStyle?: TawkCustomStyle;
	basePath?: string;
}

// ---------------------------------------------------------------------------
// Custom style
// ---------------------------------------------------------------------------

export interface TawkCustomStyleVisibilityPosition {
	xOffset?: number | string;
	yOffset?: number | string;
	/** 'br' = bottom-right, 'bl' = bottom-left, 'cr' = center-right,
	 *  'cl' = center-left, 'tr' = top-right, 'tl' = top-left */
	position?: 'br' | 'bl' | 'cr' | 'cl' | 'tr' | 'tl';
}

export interface TawkCustomStyle {
	zIndex?: number | string;
	visibility?: {
		desktop?: TawkCustomStyleVisibilityPosition;
		mobile?: TawkCustomStyleVisibilityPosition;
	};
}

// ---------------------------------------------------------------------------
// Visitor & widget switching
// ---------------------------------------------------------------------------

export interface TawkVisitorData {
	name?: string;
	email?: string;
	hash?: string;
}

export interface TawkSwitchWidgetData {
	propertyId: string;
	widgetId: string;
}

// ---------------------------------------------------------------------------
// Callback types
// ---------------------------------------------------------------------------

/** Generic no-arg callback */
export type TawkCallback = () => void;

/** Callback that receives a server-side error string */
export type TawkErrorCallback = (error: string) => void;

// ---------------------------------------------------------------------------
// Tawk_API surface (matches https://developer.tawk.to/jsapi/)
// ---------------------------------------------------------------------------

export interface TawkAPI {
	// Mutable properties set before widget loads
	visitor?: TawkVisitorData;
	customStyle?: TawkCustomStyle;
	autoStart?: boolean;
	embedded?: string;

	// State flags (read-only, set by the widget)
	onLoaded?: boolean;
	onBeforeLoaded?: boolean;

	// --- Actions ---
	start(): void;
	shutdown(): void;
	maximize(): void;
	minimize(): void;
	toggle(): void;
	popup(): void;
	showWidget(): void;
	hideWidget(): void;
	toggleVisibility(): void;
	endChat(): void;

	// --- Getters ---
	getWindowType(): 'inline' | 'embed';
	getStatus(): 'online' | 'away' | 'offline';
	isChatMaximized(): boolean;
	isChatMinimized(): boolean;
	isChatHidden(): boolean;
	isChatOngoing(): boolean;
	isVisitorEngaged(): boolean;
	widgetPosition(): string;

	// --- Setters ---
	setAttributes(
		attributes: Record<string, unknown>,
		callback?: TawkErrorCallback
	): void;

	addEvent(
		name: string,
		metadata?: Record<string, unknown>,
		callback?: TawkErrorCallback
	): void;

	addTags(tags: string[], callback?: TawkErrorCallback): void;

	removeTags(tags: string[], callback?: TawkErrorCallback): void;

	switchWidget(data: TawkSwitchWidgetData, callback?: TawkCallback): void;
}
