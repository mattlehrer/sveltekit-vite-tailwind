module.exports = {
	purge: ['src/app.html', 'src/**/*.svelte'],
	darkMode: 'class', // or 'media' or false
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
