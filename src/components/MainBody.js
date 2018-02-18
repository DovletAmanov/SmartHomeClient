import React, {Component} from 'react';
import Header from './Header';
import AboutProjectScreen from './AboutProjectScreen';
import TeamMembers from './TeamMembers';
import ContactScreen from './ContactScreen';
import Auxiliary from './hoc/Auxiliary';

class MainBody extends Component{

    render(){
        return(

            <Auxiliary>

                <Header />

                <AboutProjectScreen />

                <TeamMembers />

                <ContactScreen />
                
            </Auxiliary>

        )
    }
}

export default MainBody;