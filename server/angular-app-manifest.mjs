
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://louis-uwie.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 462, hash: 'f09e2dea4999094cee8b6783a38c9c90c2b08209bdf46d1823ea1986c6e1c5bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 975, hash: '93c04ac4b63db0d65b0c8fd716e196ddf97c245a911c040471a3b3d8aa8022d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21576, hash: '326d8a31a0e83ff38a92fba5cb905e0b6ea68bb6e548cd5fbde4082d5072f847', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
