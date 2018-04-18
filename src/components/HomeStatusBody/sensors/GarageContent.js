import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class GarageContent extends Component{


    render(){
        let { garagestatus, handleSensorButton } = this.props;
        return(
            <Auxiliary>
                <div className="sensordata">
                    <h1>Garage Door Status</h1>
                    <img src="./img/garage.png"/>
                    {
                       garagestatus 
                        ?
                        <div>
                            <p>Garage is Open</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleSensorButton("garageDoor")}
                            >
                            Close the Door
                            </button>
                        </div>
                        :
                        <div>
                            <p>Garage is Closed</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleSensorButton("garageDoor")}
                            >
                            Open the Door
                            </button>
                        </div>
                    }
                </div>
            </Auxiliary>
        )
    }
}

export default GarageContent;