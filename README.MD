# Papers Please Citation GIF Generator

This is some dumb, hacky code I threw together to make custom gifs of the Papers Please M.O.A. citations for memes.

Uses [`@blockzilla101/citation`](https://www.npmjs.com/package/@blockzilla101/citation) because I'm lazy and just want something that works.

In future I may actually clean this up (🧢).


## Requirements

- node.js version `^15.x.x` (recommend using `nvm` to manage node versions)


## Setup

- run `npm i` to download dependencies


## Running the generator

I'm too lazy to implement an CLI so you have to manually edit the `index.js` file variables.

Once everything is customized, run `node index.js` in your terminal.

`@blockzilla101/citation` allows you to control how the gif is animated by providing it with an array of y positions as the fourth arg to `Citation::animate()` - see `index_eso.js` for an example. Due to most of the `Citation` class internal positions being private however, you might need to pull some shenanigans (i.e. directly modify the library source) to extract out the right values