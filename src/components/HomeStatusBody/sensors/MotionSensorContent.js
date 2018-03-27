import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class MotionSensorContent extends Component{

    render(){
        return(
            <Auxiliary>
                 <div className="motiondata">
                    <h1>Motion Status</h1>
                    <img src="./img/motion.png"/>
                    
                    <p>
                        {
                            this.props.motionstatus
                        }
                    </p>
                </div>
            </Auxiliary>
        )
    }
}

export default MotionSensorContent;