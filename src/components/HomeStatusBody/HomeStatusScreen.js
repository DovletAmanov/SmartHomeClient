import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import { Link } from 'react-router-dom';
import Auxiliary from '../hoc/Auxiliary';

class HomeStatusScreen extends Component{

    constructor() {
        super();
        this.state = {
          temperature: false,
          humidity: false,
          gasstatus: false,
          garagestatus: false,
          endpoint: "http://192.168.1.105:8888",
          isLoggedIn: false
        };
      }

      componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("sendingheatdata", data => this.setState({ temperature: data.temperature, humidity: data.humidity }));
      }

    render(){
        const { isLoggedIn,temperature, humidity, gasstatus, garagestatus } = this.state;
       
        return (
          <Auxiliary>

           {
             isLoggedIn ? 
           
          <section id="sensorblocks">
            <div className="heatdata">
              <h1>Heat & Humidity Status</h1>
              <img src="./img/celsius.png"/>
              <div style={{ textAlign: "center" }}>

            {temperature
              ? <p>
                   Temperature: {temperature} Celsius 
                </p>
              : <p>Loading data from heat sensor...</p>}

              {humidity
              ? <p>
                   Humidity: {humidity} %
                </p>
              : <p>Loading data from heat sensor...</p>}

              </div>
            </div>

            
            <div className="gasdata">
                <h1>Dangerous Gas Status</h1>
                <img src="./img/umbrella.png"/>
                
                {
                  gasstatus
                  ?
                  <p>Methane:</p>
                  :
                  <p>Loading data from gas sensor...</p>
                }

            </div>

            
            <div className="garagedata">
                <h1>Garage Door Status</h1>
                <img src="./img/garage.png"/>
                {
                  garagestatus 
                  ?
                  <p>The door is opened</p>
                  :
                  <p>The door is closed</p>
                }
            </div>
          </section>
          :
          <div id="signalert">
            <h1>You should Sign In first</h1>
            <button><Link to="/login">Sign In</Link></button>
          </div>
          } 
          </Auxiliary>
        );
    }
}

export default HomeStatusScreen;