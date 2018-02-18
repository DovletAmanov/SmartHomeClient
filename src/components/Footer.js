import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class Footer extends Component{

    render(){
        return(
            <Auxiliary>
                 <footer>
                    <p>Smart Home Simulator, Copyright &copy; 2018</p>
                </footer>
            </Auxiliary>
        )
    }
}

export default Footer;