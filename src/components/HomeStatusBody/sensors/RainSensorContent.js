import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class RainSensorContent extends Component{

    render(){
        return(
            <Auxiliary>
                 <div className="raindata">
                <h1>Rain Status</h1>
                <img src="./img/rain.png"/>
                
                  <p>
                    {
                    this.props.rainstatus
                    }
                  </p>
            </div>
            </Auxiliary>
        )
    }
}

export default RainSensorContent;