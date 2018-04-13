import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class LivingRoomLightContent extends Component{


    render(){
        let { livingRoomLightStatus, handleSensorButton } = this.props;
        return(
            <Auxiliary>
                <div className="sensordata">
                    <h1>Living Room Light Status</h1>
                    {
                       livingRoomLightStatus 
                        ?
                        <div>
                            <img src="./img/lighton.png"/>
                            <p>Light is ON</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleSensorButton("livingRoomLight")}
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
                                onClick={() => handleSensorButton("livingRoomLight")}
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

export default LivingRoomLightContent;