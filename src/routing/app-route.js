import React from 'react';
import { Switch, Route,  Link } from 'react-router-dom';
import './app-route.css';
import Intro from '../views/intro/intro';
import Calculator from '../views/calculator/calculator';

function AppRoute() {
    return (
        <>
            <nav>
                <Link to="/">Intro</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/api-calculator">With Api</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Intro} />
                <Route path="/calculator" component={Calculator} />
            </Switch>
        </>
    );
}

export default AppRoute;