import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';
import MainLayout from './MainLayout';
import Navbar from './Navbar';
import Footer from './Footer';


class App extends Component{

    render(){
        
        return(

            <Auxiliary>

                <Navbar />

                <MainLayout />

                <Footer />

            </Auxiliary>
            
        )
    }
}

export default App;