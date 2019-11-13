import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class extends Component {
    constructor(props) {
        super(props)
        console.log('Class with State Constructor()')
        this.state = {
            count: 0
        }
    }
    incrementCounter = () => {
        console.log(this.state.count)
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state.count)
        })
    }
    componentDidMount() {
        console.log('Class with State ComponentDidMount()')
        this.incrementCounter()
    }
    componentDidUpdate() {
        console.log('Class with State ComponentDidUpdate()')
    }
    componentWillUnmount() {
        console.log('Class with State ComponentWillUnmount()')
    }
    render() {
        console.log('Class with State Render()')
        
        return (
            <div>
                <h2>Class without State</h2>
                <button onClick={this.incrementCounter}>{this.state.count}</button> <br/>
                <Link to="/func-wo">Function without State</Link>
            </div>
        );
    }
}

