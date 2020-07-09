import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/DSC02982.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic" alt="Self portrait of myself"></img>
            <ReactTypingEffect className="typingeffect" text={['Hello there!','My name is Colton Sweeney','I enjoy cars, cats, and computers']} speed={100} eraseDelay={500}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    