import React from 'react';
import Auxiliary from './hoc/Auxiliary';
import MainBody from './MainBody';
import LoginPage from './LoginPage';
import HomeStatusScreen from './HomeStatusBody/HomeStatusScreen';
import NotFoundScreen from './NotFoundScreen';
import AboutProjectPage from './AboutProjectPage';
import ContactScreen from './ContactScreen';
import { Switch, Route, Redirect} from 'react-router-dom';


const MainLayout = () => (

        <Auxiliary>

                <Switch>

                    <Route exact path="/" component={MainBody} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/aboutproject' component={AboutProjectPage} />
                    <Route path='/homestatus' component={HomeStatusScreen} />
                    <Route path='/contact' component={ContactScreen} />
                    <Route path='/notfound' component={NotFoundScreen} />
                    <Redirect from='*' to='/notfound' />

                </Switch>

        </Auxiliary>
    
)

export default MainLayout;