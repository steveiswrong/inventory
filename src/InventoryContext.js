import React from "react"
import PropTypes from "prop-types"

export const InventoryContext = React.createContext()

export class InventoryProvider extends React.PureComponent {
    state = {
        items: [],
        add: (item) => {
            const copyOfItems = this.state.copy()
            // we use unshift to insert items into the front of the list
            copyOfItems.unshift( item )
            this.setState({
                items: copyOfItems
            })
        },
        copy: () => {
            return this.state.items.slice()
        },
        remove: (index) => {
            const copyOfItems = this.state.copy()
            copyOfItems.splice( index, 1 )
            this.setState({
                items: copyOfItems
            })
        },
        replace: (index, replacements) => {
            if( replacements !== undefined && replacements.length > 0 ) {
                const length = replacements.length
                const copyOfItems = this.state.copy()
                this.copyOfItems.splice( index, length, replacements )
                this.setState({
                    items: copyOfItems
                })
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState( {items: nextProps.items || []})
    }

    render() {
        const { state, props: { children } } = this
        return (
            <InventoryContext.Provider value={state}>
                {children}
            </InventoryContext.Provider>
        )
    }
}

InventoryProvider.propTypes = {
    items: PropTypes.arrayOf( PropTypes.any ).isRequired
}

export const InventoryConsumer = InventoryContext.Consumer
