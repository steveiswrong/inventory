import React, { Component } from 'react'
import { InventoryProvider } from './InventoryContext'
import Inventory from './Inventory'

class App extends Component {

  state = {}

  componentWillMount() {
    Promise.resolve(['test1', 'test2', 'test3']).then( data => {
      this.setState( { items: data } )
    })
  }

  render() {
    return (
      <InventoryProvider items={this.state.items}>
        <Inventory />
      </InventoryProvider>
    )
  }
}

export default App
