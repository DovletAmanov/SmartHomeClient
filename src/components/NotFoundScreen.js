import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class NotFound extends Component{

    render(){
        return(
            <Auxiliary>
            <img src="./img/404.png" id="notfoundcomp" alt="img"/>
            </Auxiliary>
        )
    }
}

export default NotFound;