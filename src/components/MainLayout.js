import React from 'react';
import Auxiliary from './hoc/Auxiliary';
import MainBody from './MainBody';
import LoginPage from './LoginPage';
import HomeStatusScreen from './HomeStatusBody/HomeStatusScreen';
import NotFoundScreen from './NotFoundScreen';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


const MainLayout = () => (

        <Auxiliary>

            <BrowserRouter>
            
                <Switch>

                    <Route exact path="/" component={MainBody} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/homestatus' component={HomeStatusScreen} />
                    <Route path='/notfound' component={NotFoundScreen} />
                    <Redirect from='*' to='/notfound' />

                </Switch>

            </BrowserRouter>

        </Auxiliary>
    
)

export default MainLayout;