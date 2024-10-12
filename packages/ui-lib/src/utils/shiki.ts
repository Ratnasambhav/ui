import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'

export const highlighter = await createHighlighterCore({
  themes: [
    import('shiki/themes/vitesse-light.mjs'),
    import('shiki/themes/vitesse-dark.mjs')
  ],
  langs: [
    import('shiki/langs/css.mjs'),
    import('shiki/langs/js.mjs'),
  ],
  engine: createOnigurumaEngine(import('shiki/wasm'))
})
