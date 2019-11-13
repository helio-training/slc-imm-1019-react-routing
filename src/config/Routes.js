import React from 'react'
import { Route } from "react-router-dom";

import {
    ClassState,
    ClassWO,
    FuncWO,
    FuncState
} from '../components/examples'
import Home from '../pages/Home'

export default () => {
    
    return (
        <div>
            <Route exact path="/">
                <Home title='Hello from Routes.js'>
                    <h3>
                        I am a Props.Children Component
                    </h3>
                    <ul>
                        <li>Hello</li>
                        <li>World</li>
                    </ul>
                </Home>
            </Route>
            <Route path="/func-wo">
                <FuncWO />
            </Route>
            <Route path="/class-wo">
                <ClassWO />
            </Route>
            <Route path="/class-state">
                <ClassState />
            </Route>
            <Route path="/func-state">
                <FuncState />
            </Route>
        </div>
    )
}