# SvelteKit with TailwindCSS Setup

On 2021-03-02, SvelteKit switched from Snowpack to Vite. I saw someone asking on the Svelte Discord if anyone had gotten TailwindCSS to work with the new `npm init svelte@next` template so I set this up. I only ran into one hiccup on the way.

To recreate yourself as the SvelteKit template changes, here are the steps:

run `npm init svelte@next my-sveltekit-tailwind-project`

Open the new project and generally follow the steps in [Tailwind's Vue3 / Vite installation guide](https://tailwindcss.com/docs/guides/vue-3-vite). There are differences in purge and where you import the CSS.

Install dependencies

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

Initialize Tailwind and PostCSS configs

`npx tailwindcss init -p`

Setup [purge of unused CSS](https://github.com/mattlehrer/sveltekit-vite-tailwind/blob/44e00ba80f23552424589e798a9d8437ac93d0c1/tailwind.config.cjs#L2)

```
// tailwind.config.js
module.exports = {
	purge: ['src/app.html', 'src/**/*.svelte'],
...
}
```

Create a new CSS file with the Tailwind directives. I put it in ./src/style.css but you can organize however.

```
// ./src/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This is the tricky part.

First, I tried importing the CSS into ./src/app.html (`<link rel="stylesheet" ... `) as [Vite docs imply that the main html file is the entrypoint of the project](https://vitejs.dev/guide/#index-html-and-project-root). I'm not sure if there's a way to get that to work, but it didn't work for me.

What does work, is importing the CSS in a `<script>` block on a Svelte component. The SvelteKit scaffold doesn't have a layout setup out of the box and you probably want to use Tailwind throughout the project.

Add a new [\$layout.svelte file](https://github.com/mattlehrer/sveltekit-vite-tailwind/blob/main/src/routes/%24layout.svelte) at ./src/routes/$layout.svelte

```
// ./src/routes/$layout.svelte
<script>
	import '../style.css';
</script>

<slot />
```

That should get you going. Suggestions for better setups welcome!
