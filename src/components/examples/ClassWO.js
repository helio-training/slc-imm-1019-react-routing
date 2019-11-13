import React from 'react'
import { Link } from "react-router-dom";

class ClassWO extends React.Component {
    constructor(props) {
        super(props)
        console.log('Class without State Constructor()')
    }
    componentDidMount() {
        console.log('Class without State ComponentDidMount()')
        this.forceUpdate()
    }
    componentDidUpdate() {
        console.log('Class without State ComponentDidUpdate()')
    }
    componentWillUnmount() {
        console.log('Class without State ComponentWillUnmount()')
    }
    render() {
        console.log('Class without State Render()')
        return (
            <div>
                <h2>Class without State</h2>
                <Link to="/func-wo">Function without State</Link>
            </div>
        );
    }
}

export default ClassWO
