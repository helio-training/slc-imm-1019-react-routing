import React from 'react'
import { Link } from "react-router-dom";

export default () => {
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/func-wo">Function without State</Link>
                </li>
                <li>
                    <Link to="/class-wo">Class without State</Link>
                </li>
                <li>
                    <Link to="/class-state">Class with State</Link>
                </li>
                <li>
                    <Link to="/func-state">Function with State</Link>
                </li>
            </ul>
        </nav>
    )
}