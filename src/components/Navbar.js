import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
                        <li><a><Link to="/">Home</Link></a></li>
                        <li><a><Link to="/aboutproject">About Project</Link></a></li>
                        <li><a><Link to="/homestatus">Home Status</Link></a></li>
                        <li><a><Link to="/contact">Contact Us</Link></a></li>
                        <li><a><Link to="/login">Sign In</Link></a></li>
                    </ul>
                    </nav>
                </div>
                </header>
            </Auxiliary>

        )
    }
}

export default Navbar;