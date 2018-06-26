import React, { Component } from 'react'
import { InventoryProvider } from './InventoryContext'
import Inventory from './Inventory'
import InventoryCount from "./InventoryCount"

class App extends Component {

  state = {}

  componentWillMount() {
    Promise.resolve(['test1', 'test2', 'test3']).then( data => {
      this.setState( { items: data } )
    })
  }

  render() {
    return (
      <React.Fragment>
        <InventoryProvider items={this.state.items}>
          <Inventory />
          <InventoryCount />
        </InventoryProvider>
      </React.Fragment>
    )
  }
}

export default App
