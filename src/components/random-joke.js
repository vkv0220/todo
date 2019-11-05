import joker from "one-liner-joke";
import React from "react";


const RandomJoke = () => {
    const joke = joker.getRandomJoke().body;
    return (<div>{joke}</div>);
};

export default RandomJoke;