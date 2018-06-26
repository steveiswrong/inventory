import React, { Component } from 'react'
import { InventoryConsumer } from './InventoryContext'

class InventoryCount extends Component {

    render() {
        return (
            <InventoryConsumer>
                {(context) => (
                    Array.isArray(context.items) && <p>{context.items.length}</p>
                )}
            </InventoryConsumer>
        )
    }

}

export default InventoryCount