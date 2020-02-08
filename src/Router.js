import React, { Component } from 'react'
import {HashRouter, Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import Outdoot from './page/Outdoot'
export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/Outdoot' component={Outdoot}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </HashRouter>
        )
    }
}
