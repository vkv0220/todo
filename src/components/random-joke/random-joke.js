import joker from "one-liner-joke";
import React from "react";

import './random-joke.css'


const RandomJoke = () => {
    const joke = joker.getRandomJoke().body;
    return (<div className="random-joke column">{joke}</div>);
};

export default RandomJoke;