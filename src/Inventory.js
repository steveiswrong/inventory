import React, { Component } from 'react'
import { InventoryConsumer } from './InventoryContext'

class Inventory extends Component {

    render() {
        return (
            <InventoryConsumer>
                {(context) => (
                    Array.isArray(context.items) && context.items.map( (item, index) => (
                        <div>
                            {item}
                            <button type="button" onClick={() => context.remove( index )}>Remove</button>
                        </div>
                    ))    
                )}
            </InventoryConsumer>
        )
    }

}

export default Inventory