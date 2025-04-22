// src/shared/types/external/launch-editor-middleware.d.ts

declare module 'launch-editor-middleware' {
  import { NextHandleFunction } from 'connect'

  type Editor = 'code' | 'webstorm' | 'sublime' | 'atom' | string

  interface Options {
    editor?: Editor
    cwd?: string
  }

  const launchEditorMiddleware: (
    editor?: Editor,
    options?: Options
  ) => NextHandleFunction

  export = launchEditorMiddleware
}
