import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['nav-btn', 'text-light-on-surface-variant hover:text-light-on-surface dark:text-dark-on-surface-variant dark:hover:text-dark-on-surface'],
    ['title', 'text-light-on-background dark:text-dark-on-background'],
  ],
  theme: {
    maxWidth: {
      def: '64rem',
    },
    colors: {
      light: {
        'primary': '#126d34',
        'onPrimary': '#ffffff',
        'primaryContainer': '#a0f6ae',
        'onPrimaryContainer': '#00210a',
        'secondary': '#506351',
        'onSecondary': '#ffffff',
        'secondaryContainer': '#d3e8d2',
        'onSecondaryContainer': '#0e1f11',
        'tertiary': '#39656d',
        'onTertiary': '#ffffff',
        'tertiaryContainer': '#bdeaf4',
        'onTertiaryContainer': '#001f24',
        'error': '#ba1a1a',
        'errorContainer': '#ffdad6',
        'onError': '#ffffff',
        'onErrorContainer': '#410002',
        'background': '#fcfdf7',
        'onBackground': '#1a1c19',
        'surface': '#fcfdf7',
        'onSurface': '#1a1c19',
        'surfaceVariant': '#dde5da',
        'onSurfaceVariant': '#414941',
        'outline': '#727970',
        'inverse-onSurface': '#f0f1ec',
        'inverseSurface': '#2e312e',
        'inversePrimary': '#84d994',
        'shadow': '#000000',
        'surfaceTint': '#126d34',
        'outlineVariant': '#c1c9be',
        'scrim': '#000000',
      },
      dark: {
        'primary': '#84d994',
        'onPrimary': '#003916',
        'primaryContainer': '#005323',
        'onPrimaryContainer': '#a0f6ae',
        'secondary': '#b7ccb6',
        'onSecondary': '#233425',
        'secondaryContainer': '#394b3b',
        'onSecondaryContainer': '#d3e8d2',
        'tertiary': '#a1ced7',
        'onTertiary': '#00363e',
        'tertiaryContainer': '#204d55',
        'onTertiaryContainer': '#bdeaf4',
        'error': '#ffb4ab',
        'errorContainer': '#93000a',
        'onError': '#690005',
        'onErrorContainer': '#ffdad6',
        'background': '#1a1c19',
        'onBackground': '#e2e3de',
        'surface': '#1a1c19',
        'onSurface': '#e2e3de',
        'surfaceVariant': '#414941',
        'onSurfaceVariant': '#c1c9be',
        'outline': '#8b9389',
        'inverse-onSurface': '#1a1c19',
        'inverseSurface': '#e2e3de',
        'inversePrimary': '#126d34',
        'shadow': '#000000',
        'surfaceTint': '#84d994',
        'outlineVariant': '#414941',
        'scrim': '#000000',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})