import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class KitchenLightContent extends Component{


    render(){
        let { kitchenLightStatus, handleSensorButton } = this.props;
        return(
            <Auxiliary>
                <div className="sensordata">
                    <h1>Garage Light Status</h1>
                    {
                       kitchenLightStatus 
                        ?
                        <div>
                            <img src="./img/lighton.png"/>
                            <p>Light is ON</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleSensorButton("kitchenLight")}
                            >
                            Switch OFF the light
                            </button>
                        </div>
                        :
                        <div>
                            <img src="./img/lightoff.png"/>
                            <p>Light is OFF</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleSensorButton("kitchenLight")}
                            >
                            Switch ON the light
                            </button>
                        </div>
                    }
                </div>
            </Auxiliary>
        )
    }
}

export default KitchenLightContent;