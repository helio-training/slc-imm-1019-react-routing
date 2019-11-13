import React from 'react'
import { Link } from "react-router-dom";

export default () => {
    return (
        <div>
            <h2>Class without State</h2>
            <Link to="/func-wo">Function without State</Link>
        </div>
    );
}