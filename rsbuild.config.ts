import { pluginGemkit } from '@mantou/gemkit/plugin';
import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  plugins: [pluginGemkit({ title: 'Xianqiao Wang', titleTemplate: '%s · Xianqiao Wang' })],
});
