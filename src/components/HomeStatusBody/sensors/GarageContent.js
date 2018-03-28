import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class GarageContent extends Component{


    render(){
        let { garagestatus, handleGarageButton } = this.props;
        return(
            <Auxiliary>
                <div className="garagedata">
                    <h1>Garage Door Status</h1>
                    <img src="./img/garage.png"/>
                    {
                       garagestatus 
                        ?
                        <div>
                            <p>Garage is Open</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleGarageButton()}
                            >
                            Close the Garage Door
                            </button>
                        </div>
                        :
                        <div>
                            <p>Garage is Closed</p>
                            <button 
                                className="sensorButtons"
                                onClick={() => handleGarageButton()}
                            >
                            Open the Garage Door
                            </button>
                        </div>
                    }
                </div>
            </Auxiliary>
        )
    }
}

export default GarageContent;