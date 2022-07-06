
/** @jsx h */
import { h } from "preact";
import {Handlers, PageProps} from '$fresh/src/server/types.ts';

interface User {
    login: string;
    name: string;
    avatar_url: string;
}

export const handler: Handlers<User|null> = {
    async GET(req, ctx) {
        const {username} = ctx.params;
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if(resp.status === 404) {
            return ctx.render(null)
        }

        const user: User = await resp.json();
        return ctx.render(user);
    }
}

export default function Page({data}: PageProps<User|null>) {

    if(!data) {
        return <div>User not found</div>;
    }

    return (<div>
        <img src={data.avatar_url} width={64} height={64}/>
        <h1>{data.name}</h1>
        <h1>{data.login}</h1>
    </div>)
}
