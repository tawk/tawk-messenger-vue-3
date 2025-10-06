# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Vue 3 plugin that integrates Tawk.to's live chat messenger service. The project is a JavaScript library that provides a Vue-compatible wrapper around the Tawk.to JavaScript API, allowing Vue 3 applications to easily embed and control the chat widget.

## Development Commands

### Core Development
```bash
# Start development server on port 5174 (project-specific port)
npm run dev

# Build the plugin for distribution
npm run build

# Run all unit tests
npm run test:unit

# Run tests with coverage report
npm run test:coverage

# Lint and fix code
npm run lint
```

### Running Individual Tests
The project uses Vitest for testing. Test files are located in `tests/units/` and `tests/utils/`:
```bash
# Run a specific test file
npx vitest tests/units/install.spec.js

# Run tests in watch mode
npx vitest --watch

# Run tests for a specific pattern
npx vitest --run --reporter=verbose features
```

## Architecture Overview

### Plugin Structure
The plugin follows a provider-based architecture using Vue 3's dependency injection system:

1. **Entry Point** (`src/index.js`): Vue plugin installer that validates required options and initializes the TawkMessenger class
2. **Core Logic** (`src/lib/index.js`): TawkMessenger class that loads the Tawk script and provides all API methods via Vue's `provide()` system
3. **Utilities**: Helper functions for validation and script loading

### API Categories
The plugin provides four categories of Tawk.to APIs through Vue's inject system:

- **Actions**: Methods that perform operations (start, shutdown, maximize, minimize, etc.)
- **Getters**: Methods that return widget state (getStatus, isChatMaximized, etc.)  
- **Listeners**: Event handlers for widget events (onLoad, onChatStarted, etc.)
- **Setters**: Methods that modify widget data (visitor info, attributes, tags, etc.)

### Key Files and Responsibilities

- **`src/index.js`**: Plugin registration and option validation
- **`src/lib/index.js`**: Main TawkMessenger class containing all API providers
- **`src/utils/helper.js`**: String validation utility
- **`src/utils/widget.js`**: Script loading and DOM manipulation for Tawk widget
- **`dev.js`**: Development environment setup for testing the plugin

### Testing Architecture
- **`tests/setup.js`**: Test environment configuration with mocked window/DOM APIs
- **`tests/units/`**: Unit tests for plugin functionality
- **`tests/utils/`**: Tests for utility functions
- Uses Vitest with jsdom for DOM simulation

### Build Configuration
- **Vite**: Used for both development and building the library
- **Library Mode**: Builds both ES modules and UMD formats
- **External Dependencies**: Vue is externalized (not bundled)
- **Output**: `dist/tawk-messenger-vue-3.es.js` and `dist/tawk-messenger-vue-3.umd.js`

## Development Guidelines

### Plugin Configuration
All plugin methods are provided using Vue's dependency injection. Components access them via `inject()`:

```javascript
// Composition API
const tawkToggle = inject('tawkToggle');

// Options API
inject: ['tawkToggle']
```

### Required Configuration
The plugin requires two mandatory parameters:
- `propertyId`: From tawk.to dashboard (Administration > Channels > Chat Widget)
- `widgetId`: From tawk.to dashboard

### Optional Configuration
- `embedId`: ID of existing DOM element to embed chat in
- `autoStart`: Whether to automatically start the widget (default: true)
- `customStyle`: Custom CSS styles object
- `basePath`: Custom base path (default: 'tawk.to')

### Script Loading Behavior
The plugin dynamically loads the Tawk.to script and provides a wrapper around their JavaScript API. The script is loaded asynchronously and all API methods are made available through Vue's provide/inject system.

### Browser Compatibility
The plugin includes proper error handling for server-side environments (checks for `window` and `document` objects) and is compatible with both SPA and SSR Vue applications.

## Security Features

### Input Validation
The plugin implements comprehensive input validation to prevent security vulnerabilities:

- **Property/Widget ID Validation**: Only alphanumeric characters, hyphens, underscores, and dots are allowed
- **Domain Validation**: Script loading is restricted to tawk.to domains only
- **Length Limits**: ID parameters are limited to 100 characters to prevent abuse
- **XSS Prevention**: All inputs are validated against script injection patterns

### Secure Script Loading
- **URL Encoding**: All parameters are properly encoded before URL construction
- **CORS Security**: Uses `crossorigin="anonymous"` for stricter security policies
- **Referrer Policy**: Implements `strict-origin-when-cross-origin` for better privacy
- **Domain Restriction**: Only allows loading scripts from verified tawk.to domains

### Security Testing
Comprehensive security tests are included to validate:
- Input validation functions (`tests/units/helper-security.spec.js`)
- Widget loading security (`tests/units/widget-security.spec.js`)
- XSS prevention measures
- Domain confusion attack prevention
