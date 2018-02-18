import React, {Component} from 'react';
import Auxiliary from './hoc/Auxiliary';

class ContactScreen extends Component{

    render(){
        return(

            <Auxiliary>
                <section id="newsletter">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <form>
                        <input type="email" placeholder="Enter Email..."/>
                        <button type="submit" className="button_1">Subscribe</button>
                        </form>
                    </div>
                </section>
            </Auxiliary>

        )
    }
}

export default ContactScreen;