import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class GasSensorContent extends Component{

    render(){
        let { gasstatus } = this.props;
        return(
            <Auxiliary>
                <div className="gasdata">
                    <h1>Dangerous Gas Status</h1>
                    <img src="./img/gas.png"/>
                    
                    {
                    gasstatus
                    ?
                    <p>Methane:</p>
                    :
                    <p>Loading data from gas sensor...</p>
                    }
                </div>
             </Auxiliary>
        )
    }
}

export default GasSensorContent;