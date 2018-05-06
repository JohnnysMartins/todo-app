import React from 'react'
// import { Router, Route, Redirect , browserHistory} from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Todo from '../todo/todo';
import About from '../about/about';


export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/todos' exact={true} component={Todo} />
            <Route path='/about' component={About} />
            <Route path='*' component={Todo} />
        </Switch>
    </BrowserRouter>
)