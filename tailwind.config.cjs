module.exports = {
	purge: ['src/app.html', 'src/**/*.svelte'],
	darkMode: 'media', // or 'media' or false
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
	plugins: [],
};
