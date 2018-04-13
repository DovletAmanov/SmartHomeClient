import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class GasSensorContent extends Component{

    render(){
        let { gasStatus } = this.props;
        return(
            <Auxiliary>
                <div className="sensordata">
                    <h1>Dangerous Gas Status</h1>
                    <img src="./img/gas.png"/>
                    <p>
                        {
                            gasStatus
                        }
                    </p>
                </div>
             </Auxiliary>
        )
    }
}

export default GasSensorContent;