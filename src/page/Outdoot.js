import React, { Component } from 'react'

export default class Outdoot extends Component {
    render() {
        // console.log(this.props.location)
        return (
            <div>
                {this.props.location.state}
            </div>
        )
    }
}
