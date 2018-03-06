import React from 'react';
import Auxiliary from './hoc/Auxiliary';
import MainBody from './MainBody';
import LoginPage from './LoginPage';
import HomeStatusScreen from './HomeStatusBody/HomeStatusScreen';
import AboutProjectPage from './AboutProjectPage';
import ContactScreen from './ContactScreen';
import { Switch, Route} from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";


const MainLayout = () => (

        <Auxiliary>

                <Switch>
                        <ScrollToTop>
                                <Route exact path="/" component={MainBody} />
                                <Route path='/login' component={LoginPage} />
                                <Route path='/aboutproject' component={AboutProjectPage} />
                                <Route path='/homestatus' component={HomeStatusScreen} />
                                <Route path='/contact' component={ContactScreen} />
                        </ScrollToTop>
                </Switch>

        </Auxiliary>
    
)

export default MainLayout;