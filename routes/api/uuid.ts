
import {Handlers} from '$fresh/server.ts';

export const handler: Handlers = {
    GET: async (req, ctx) => {
        const uuid = crypto.randomUUID();
        return new Response(JSON.stringify(uuid), {
            headers: {"Content-Type": "application/json"},
        });
    }
}
