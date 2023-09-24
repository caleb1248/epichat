import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = (req) => {
	const { cookies, params, route } = req;
	return new Response(JSON.stringify({ cookies, params, route }));
};
