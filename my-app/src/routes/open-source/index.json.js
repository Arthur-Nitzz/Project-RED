const projects = [
  {
    url: 'https://github.com/kaisermann/svelte-preprocess',
    name: 'svelte-preprocess',
    description: 'quick and painless preprocess support for svelte',
  },
  {
    url: 'https://github.com/kaisermann/svelte-i18n',
    name: 'svelte-i18n',
    description: 'internationalization library for Svelte',
  },
  {
    url: 'https://github.com/kaisermann/svelte-loadable',
    name: 'svelte-loadable',
    description: 'dynamically load a svelte component',
  },
  {
    url: 'https://github.com/kaisermann/svelte-css-vars',
    name: 'svelte-css-vars',
    description: 'reactive css variables in svelte',
  },
  {
    url: 'https://github.com/vtex/typescript',
    name: 'vtex/typescript',
    description: "VTEX's typescript/javascript styleguide, tooling and recipes",
  },
  {
    url: 'https://github.com/vtex/danger',
    name: 'vtex/danger',
    description: 'encapsulated danger ruleset and github action',
  },
  {
    url: 'https://github.com/stone-payments/pos-mamba-sdk',
    name: 'pos-mamba-sdk',
    description: 'SDK for developing apps for the Mamba POS system',
  },
  {
    url: 'https://github.com/stone-payments/pos-mamba-app-template',
    name: 'pos-mamba-app-template',
    description: 'template for creating apps for the Mamba POS system',
  },
  {
    url: 'https://github.com/kaisermann/photoswippy',
    name: 'photoswippy',
    description: 'a PhotoSwipe friendly wrapper',
  },
  {
    url: 'https://github.com/kaisermann/rolleiflex',
    name: 'rolleiflex',
    description: 'css flexbox grid/helper framework',
  },
  {
    url: 'https://github.com/kaisermann/textlooper',
    name: 'textlooper',
    description: 'lightweight text rotation based on css animations',
  },
  {
    url: 'https://github.com/kaisermann/comicbubbles',
    name: 'comicbubbles',
    description: 'css-only 8 bit-like comic balloons',
  },
  {
    url: 'https://github.com/kaisermann/post-links',
    name: 'post-links',
    description: 'open <a> links using POST instead of GET',
  },
  {
    url: 'https://github.com/kaisermann/aph',
    name: 'aph',
    description: 'minimal DOM, barely api-less, manipulation library',
  },
  {
    url: 'https://github.com/kaisermann/WPDLS',
    name: 'wpdls',
    description: 'basic custom WordPress admin style made easy with stylus',
  },
  {
    url: 'https://github.com/kaisermann/crius',
    name: 'crius',
    description: 'flexible front-end workflow',
  },
  {
    url: 'https://github.com/kaisermann/selene',
    name: 'selene',
    description: 'opinionated wordpress starter theme',
  },
  {
    url: 'https://github.com/kaisermann/hyperion',
    name: 'hyperion',
    description: 'static website workflow forked from Crius',
  },
];

export function get(_req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(projects));
}
