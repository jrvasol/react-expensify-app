import React from 'react';
import {Router, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import LoginPage from '../components/LoginPage';

export let history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}> 
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={ExpenseDashBoardPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;