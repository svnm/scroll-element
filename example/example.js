import { scrollToElement, scrollWindowToElement } from '../lib/index'

import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  componentDidMount() {
    this.loadItems()
  }

  loadItems() {
    let items = this.state.items.slice()
    items = items.concat(this.getItems())
    this.setState({ items: items })
  }

  getItems() {
    let items = []
    for(var i = 0; i < 20; i++) {
      items.push({ name: `Item number ${i}`, description: 'A description of an item' })
    }
    return items
  }

  renderCards() {
    const { items } = this.state
    let cardStyle = { backgroundColor: 'white', padding: '1rem', margin: '1rem' }

    const cards = items.map((item, i) => {
      return (
        <div id={`item-${i}`} key={i} style={cardStyle}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    })
    return cards
  }

  handleClick() {
    let targetElement = document.getElementById('item-6')
    scrollWindowToElement(targetElement, 1000, -100)
  }

  render () {
    let containerStyle = { fontFamily: 'Helvetica Neue', paddingTop: '2rem', paddingBottom: '2rem', background: '#22354c', position: 'relative' }
    let buttonStyle = { margin: '1rem', background: '#fff', color: '#22354c', padding: '8px', fontSize: '18px', width: '300px', borderRadius: '10px', textAlign: 'center', textTransform: 'uppercase' }

    return (
      <div style={containerStyle}>
        <button style={buttonStyle} onClick={::this.handleClick}>
          Click to ScrollTo...
        </button>
        { this.renderCards() }
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
