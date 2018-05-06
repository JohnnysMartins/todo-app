import React from 'react'
// import { Router, Route, Redirect , browserHistory} from 'react-router'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Todo from '../todo/todo';
import About from '../about/about';
import Menu from '../template/menu';

export default props => (
    <BrowserRouter>
        <div>
            <Menu />
            <div className='container'>
                <Switch>
                    <Route path='/todos' exact={true} component={Todo} />
                    <Route path='/about' component={About} />
                    <Redirect from='*' to='/todos' />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
)