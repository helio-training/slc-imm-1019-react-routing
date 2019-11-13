import React from 'react'
import { Link } from "react-router-dom";

export default () => {
    console.log('Function without State executed')
    return (
        <div>
            <h2>Function without State</h2>
            <Link to="/class-wo">Class without State</Link>
        </div>
    );
}