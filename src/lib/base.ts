const root = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * GitHub Pages serves this project from a sub-path, Cloudflare serves it from
 * the domain root, so absolute links have to be rewritten at build time.
 */
export function withBase(path: string): string {
	if (!path.startsWith('/')) return path;
	return `${root}${path}`;
}
