import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class Header extends Component{

    render(){
       
        return(
            <Auxiliary>
                <section id="showcase">
                    <div className="container">
                        <div className="ptext">
                            <div className="border">
                                <h1>Welcome to Smart Home Simulator</h1>
                             </div>
                        </div>
                    </div>
                </section>
            </Auxiliary>
        )
    }
}

export default Header;