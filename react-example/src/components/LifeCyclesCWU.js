import React, { Component } from 'react'
import LifeCyclesCWUTracker from './LifeCyclesCWUTracker'

export class LifeCyclesCWU extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }
    }

    toggleDisplay = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    componentWillUnmount() {
        console.log("unmounting")
        window.removeEventListener("mousemove", this.trackMouse)
    }

    render() {
        return (
            <div>
                {this.state.visible && <LifeCyclesCWUTracker />}
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
        )
    }
}

export default LifeCyclesCWU