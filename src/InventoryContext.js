import React from "react"
import PropTypes from "prop-types"

export const InventoryContext = React.createContext()

export class InventoryProvider extends React.PureComponent {
    state = {
        items: [],
        add: item => {
            const newItems = this.state.items.slice()
            newItems.unshift( item )
            this.setState({
                items: newItems
            })
        },
        remove: index => {
            this.state.items.splice( index, 1 )
            this.setState({
                items: Object.assign([], this.state.items)
            })
        },
        replace: (index, replacements) => {
            replacements = replacements || []
            const length = replacements.length
            this.state.items.splice( index, length, replacements )
            this.setState({
                items: Object.assign([], this.state.items)
            })
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
