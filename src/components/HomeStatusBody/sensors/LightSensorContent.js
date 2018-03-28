import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class LightSensorContent extends Component{

    render(){
        let { lightstatus } = this.props;
        return(
            <Auxiliary>
                <div className="lightdata">
                    <h1>Light Status</h1>
                    <img src="./img/light.png"/>
                    
                    <p>
                        {
                            lightstatus
                        }
                    </p>
                </div>
            </Auxiliary>
        )
    }
}

export default LightSensorContent;