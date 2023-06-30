<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2021-05-11 14:34:14
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-05-26 13:06:36
 * @package air-light
 */

namespace Air_Light;

function nuklear_blocks_add_category_in_gutenberg( $categories, $post ) {
  return array_merge( $categories, [
    [
      'slug'  => 'nuklear-blocks',
      'title' => __( 'Nuklear blocks', 'nuklear-blocks' ),
    ],
  ] );
} // end nuklear_blocks_add_category_in_gutenberg
