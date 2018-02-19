import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import Auxiliary from '../hoc/Auxiliary';

class HomeStatusScreen extends Component{

    constructor() {
        super();
        this.state = {
          temperature: false,
          humidity: false,
          endpoint: "http://192.168.1.103:8888"
        };
      }

      componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("sendingheatdata", data => this.setState({ temperature: data.temperature, humidity: data.humidity }));
      }

    render(){
        const { temperature, humidity } = this.state;
       
        return (
          <div style={{ textAlign: "center" }}>

            {temperature
              ? <p>
                   Temperature: {temperature} Celsius 
                </p>
              : <p>Loading...</p>}

              {humidity
              ? <p>
                   Humidity: {humidity} %
                </p>
              : <p>Loading...</p>}

          </div>
        );
    }
}

export default HomeStatusScreen;