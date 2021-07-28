
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
import 'web-animations-js';  // Run `npm install --save web-animations-js`.



/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.



/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js';  // Included with Angular CLI.
import 'hammerjs';

import * as process from 'process';

(window as any).global = window;
(window as any).process = process;

// @ts-ignore
(window as any).Buffer = window.Buffer || require('buffer').Buffer;


/***************************************************************************************************
 * APPLICATION IMPORTS
 */
