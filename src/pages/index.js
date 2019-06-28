import React from "react"
import { Link } from "gatsby"
import Button from "../components/button"
import Header from "../components/header"

let clickCount = 0;

let handleClick = function() {
    console.log('handleClick');
    console.log(this);
    ++clickCount;
};

export default () => (
    <div style={{ color:"tomato" }}>
        <Header text="This Header is My Property" />
        <p>I am a web application, hear me boot up.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <div>
            <Button text="Click!" handleClick={handleClick}/>
        </div>
        <div>Clicked { clickCount } times.</div>
        <p>
            <Link to="/about/">About</Link> |
            <Link to="/broke/">Broke</Link>
        </p>
    </div>
)
