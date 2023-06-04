/* eslint-disable max-len, no-param-reassign, no-unused-vars */
/**
 * Air theme JavaScript.
 */

// Import modules
import reframe from 'reframe.js';
import { styleExternalLinks, initExternalLinkLabels } from '@src/scripts/modules/external-link.js';
import initAnchors from '@src/scripts/modules/anchors.js';
import backToTop from '@src/scripts/modules/top.js';
import initA11ySkipLink from '@src/scripts/modules/a11y-skip-link.js';
import initA11yFocusSearchField from '@src/scripts/modules/a11y-focus-search-field.js';
import { navDesktop, navMobile } from '@src/scripts/modules/navigation.js';

// Define Javascript is active by changing the body class
document.body.classList.remove('no-js');
document.body.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  initAnchors();
  backToTop();
  styleExternalLinks();
  initExternalLinkLabels();
  initA11ySkipLink();
  initA11yFocusSearchField();

  // Init navigation
  // If you want to enable click based navigation, comment navDesktop() and uncomment navClick()
  // Remember to enable styles in sass/navigation/navigation.scss
  navDesktop();
  // navClick();
  navMobile();

  // Fit video embeds to container
  reframe('.wp-has-aspect-ratio iframe');
});
