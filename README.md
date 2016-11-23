# scroll-element

Scroll to an element

[![npm version](https://badge.fury.io/js/scroll-element.svg)](https://badge.fury.io/js/scroll-element)

## Install

`npm install scroll-element --save`

## Usage

Check out the [example](https://github.com/StevenIseki/scroll-element/blob/master/example) for more info.

```jsx
import { scrollToElement, scrollWindowToElement } from 'scroll-element'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  componentDidMount() {
    this.loadItems()
  }

  render () {
    return (
      <div>
        { this.renderCards() }
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
```

scrollToElement(containerElement, targetElement, duration, offset)

scrollWindowToElement(targetElement, duration, offset)

## Params

- `targetElement`

The dom element to scroll to.

- `containerElement`

The dom element to scroll, set this to overflow.

- `duration`

Duration of time to scroll to the element in milliseconds.

- `offset`

An additional offset in pixels from the element being scrolled to.

- `onScroll()`

A function to call when the loader item has been scrolled to.

## Development
    npm install
    npm run build
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
