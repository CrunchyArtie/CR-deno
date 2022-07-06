
/** @jsx h */
import { h } from "preact";
import Countdown from '../islands/Countdown.tsx';

export default function Page() {

    const date = new Date();
    date.setSeconds(date.getSeconds() + 10);

    return (
        <div>
            let's go : <Countdown target={date.toISOString()} />
        </div>
    );
}
