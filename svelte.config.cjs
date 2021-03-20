const preprocess = require('svelte-preprocess');
const pkg = require('./package.json');
const { resolve } = require('path');

module.exports = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: '@sveltejs/adapter-node',

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {}),
			},
			resolve: {
				alias: {
					$components: resolve('src/components'),
				},
			},
		},
	},
	preprocess: preprocess({
		postcss: true,
		defaults: {
			style: 'postcss',
		},
	}),
};
