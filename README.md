# scroll-element

Scroll to an element

[![npm version](https://badge.fury.io/js/scroll-element.svg)](https://badge.fury.io/js/scroll-element)

![](https://raw.githubusercontent.com/StevenIseki/scroll-element/master/example/screenshot.gif)

## Install

`npm install scroll-element --save`

## Usage

Scroll-Element has 2 functions, `scrollToElement` scrolls to an element within a container div with overflow scroll. `scrollWindowToElement` just scrolls the window to the element. Check out the [example](https://github.com/StevenIseki/scroll-element/blob/master/example) for more info.

```js
import { scrollToElement, scrollWindowToElement } from 'scroll-element'

let targetElement = document.getElementById('my-item')
scrollWindowToElement(targetElement, 1000, -100)
```

## Params

- `targetElement`

The dom element to scroll to.

- `duration`

Duration of time to scroll to the element in milliseconds. (Optional)

- `offset`

An additional offset in pixels from the element being scrolled to. (Optional)

- `containerElement`

The dom element to scroll, set this to overflow. (Only used for scrollWindowToElement function)

## Development
    npm install
    npm run build
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
