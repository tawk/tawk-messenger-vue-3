// Dependencies
import { vi } from 'vitest';

// Utilities
import * as loadScriptFn from '../src/utils/widget';

vi.spyOn(loadScriptFn, 'loadScript').mockImplementation(() => {});
vi.spyOn(console, 'error').mockReturnValue(true);
vi.spyOn(window, 'addEventListener');