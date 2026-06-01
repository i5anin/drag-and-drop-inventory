import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

// Flat config (ESLint 10) для Vue 3 + TypeScript.
// Тип-проверка отдаётся vue-tsc, поэтому здесь нетипизированный `recommended`.
export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['dist/**', 'dist-ssr/**', 'coverage/**'],
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
)
