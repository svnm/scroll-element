import { scrollToElement, scrollWindowToElement } from '../../lib/index'

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
      items.push({ name: 'An item', description: 'A description of an item' })
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

  render () {
    let containerStyle = { paddingTop: '2rem', paddingBottom: '2rem', background: 'rgb(248, 245, 236)', position: 'relative' }

    return (
      <div style={containerStyle}>
        { this.renderCards() }
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
