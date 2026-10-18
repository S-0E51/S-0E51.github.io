import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const basePath = process.env.BASE_PATH ?? '';

if (basePath !== '' && !/^\/(?:[^/?#\s]+\/)*[^/?#\s]+$/.test(basePath)) {
	throw new Error(
		'BASE_PATH must be empty or a path such as /portfolio, without a trailing slash.'
	);
}

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			paths: { base: basePath as '' | `/${string}` }
		})
	]
});
