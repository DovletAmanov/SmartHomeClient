import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class RainSensorContent extends Component{

    render(){
        let { rainstatus } = this.props
        return(
            <Auxiliary>
                 <div className="raindata">
                    <h1>Rain Status</h1>
                    <img src="./img/rain.png"/>
                    
                    <p>
                        {
                            rainstatus
                        }
                    </p>
                </div>
            </Auxiliary>
        )
    }
}

export default RainSensorContent;