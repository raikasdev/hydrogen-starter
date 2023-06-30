/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-02-11 15:38:14
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-09-29 13:53:14
 */
// Declare the blocks you'd like to style.

roots.register.blocks('@src/blocks');

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(console.error);
}

// eslint-disable-next-line
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'boxed',
  label: 'Laatikko',
});
