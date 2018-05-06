import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/">
                <i className="fa fa-calendar-check-o"></i> TodoApp
            </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/todos">Tarefas</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">Sobre</Link></li>
            </ul>
        </div>
    </nav>
)