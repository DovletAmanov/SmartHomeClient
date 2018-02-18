import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';


class Navbar extends Component{

    render(){
        return(

            <Auxiliary>
               <header>
                <div className="container">
                    <div id="branding">
                    <h1><span className="highlight">Smart</span> Home Simulator</h1>
                    </div>
                    <nav>
                    <ul>
                        <li className="current"><a href="#">Home</a></li>
                        <li><a href="#">About Project</a></li>
                        <li><a href="#">Home Status</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
                    </nav>
                </div>
                </header>
            </Auxiliary>

        )
    }
}

export default Navbar;