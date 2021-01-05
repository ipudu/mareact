import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'mareact',
  favicon: '/images/logo.svg',
  logo: '/images/logo.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/mareact',
  publicPath: '/mareact/',
  exportStatic: {},
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/ipudu/mareact',
    },
  ],
});
