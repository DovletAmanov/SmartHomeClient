import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class Header extends Component{

    render(){
       
        return(
            <Auxiliary>
                <section id="showcase">
                    <div className="container">
                        <h1>Welcome to Smart Home Simulator</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</p>
                    </div>
                </section>
            </Auxiliary>
        )
    }
}

export default Header;