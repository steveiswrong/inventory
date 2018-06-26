import React, { Component } from 'react'
import { InventoryConsumer } from './InventoryContext'

class Inventory extends Component {

    render() {
        return (
            <InventoryConsumer>
                {(context) => (
                    <React.Fragment>
                        {Array.isArray(context.items) && context.items.map( (item, index) => (
                            <div>
                                {item}
                                <button type="button" onClick={() => context.remove( index )}>Remove</button>
                            </div>
                        ))}
                        <div><button type="button" onClick={() => context.add(`test${context.items.length+1}`)}>Add</button></div>
                    </React.Fragment>
                )}
            </InventoryConsumer>
        )
    }

}

export default Inventory