import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// @ts-expect-error: defineConfig не поддерживает асинхронный коллбек — используем workaround через async wrapper
export default defineConfig(async ({ mode }) => {
  // @ts-expect-error: launch-editor-middleware не содержит декларации типов — обрабатывается как any
  const { default: openInEditor } = await import('launch-editor-middleware')

  const openInEditorPlugin = () => ({
    name: 'vite-plugin-open-in-editor',
    configureServer(server: any): void {
      server.middlewares.use('/__open-in-editor', openInEditor('webstorm'))
    },
  })

  return {
    plugins: [
      vue(),
      mode === 'development' ? vueDevTools() : null,
      openInEditorPlugin(),
    ].filter(Boolean),

    server: {
      port: 5173,
      host: true,
    },

    resolve: {
      alias: {
        '#src': path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
