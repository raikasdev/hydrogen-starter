const postcssPlugins = ['calc', 'colormin', 'discard-empty', 'discard-unused', 'merge-longhand', 'merge-rules', 'minify-font-values', 'minify-gradients', 'normalize-positions', 'normalize-url', 'unique-selectors', 'zindex'];

// We are not using Babel, we are using SWC! Super fast.

/** @param {import('@roots/bud').Bud} bud */
export default async (bud) => {
  // PostCSS plugins
  bud.postcss.setPlugins(
    await Promise.all(
      postcssPlugins.map(
        async (plugin) => [plugin, await bud.module.resolve(`postcss-${plugin}`)],
      ),
    ),
  );

  // Configure entrypoints
  bud
    .entry('app', ['@src/scripts/app', '@src/styles/global.scss'])
    .entry('editor', ['@src/scripts/editor', '@src/styles/editor.scss'])
    .entry('legacy', ['@src/scripts/legacy'])
    .assets(['@src/fonts', '@src/svg']);

  // Enable minimizing
  bud.minimize(true);

  // Configure HMR
  bud
    .setUrl('http://localhost:3000')
    .setProxyUrl('http://example.test')
    .watch(['@src']);

  // WP theme.json
  bud.wpjson
    .set('settings.color.custom', false)
    .set('settings.color.customDuotone', false)
    .set('settings.color.customGradient', false)
    .set('settings.color.defaultDuotone', false)
    .set('settings.color.defaultGradients', false)
    .set('settings.color.defaultPalette', false)
    .set('settings.color.duotone', [])
    .set('settings.custom.spacing', {})
    .set('settings.custom.typography.font-size', {})
    .set('settings.custom.typography.line-height', {})
    .set('settings.spacing.padding', true)
    .set('settings.spacing.units', ['px', '%', 'em', 'rem', 'vw', 'vh'])
    .set('settings.typography.customFontSize', false)
    .enable();

  // 
  //bud.sh(['yes']);

};
