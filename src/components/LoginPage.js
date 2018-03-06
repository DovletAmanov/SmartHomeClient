import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';



class LoginPage extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            isSignin : true
        }
    }

    _handleClick = () => {
        this.setState({
            isSignin: !this.state.isSignin
        })
    }
    
 

    render(){

        const signInBody = (
            <div>
                <div className="signin"> 
                    <h3>Sign In</h3>
                    <h5>Username</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <br />
                    <button className="loginbutton">Sign In</button>
                    <p>Don't have an account yet? <span className="span-link" onClick={() => this._handleClick()}>Register</span> here</p>
                </div>
            </div>
        )
        
        const signUpBody = (
            <div>
                <div className="signin"> 
                    <h3>Sign Up</h3>
                    <h5>Name</h5>
                    <input type="text"/>
                    <h5>Surname</h5>
                    <input type="text"/>
                    <h5>Username</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <h5>Re-type Password</h5>
                    <input type="password"/>
                    <br />
                    <button className="loginbutton">Sign Up</button>
                    <p>Already have an account?<span className="span-link" onClick={()=> this._handleClick()}> Sign in</span> here</p>
                </div>
            </div>
        )


        return(

            <Auxiliary>
                <br />
                <br />
                <br />
                <br />
                <section id="loginpart">
                    <h2>Login Page</h2>
                    {
                        this.state.isSignin ? signInBody : signUpBody
                    }
                </section>
            </Auxiliary>

        )
    }
}

export default LoginPage;