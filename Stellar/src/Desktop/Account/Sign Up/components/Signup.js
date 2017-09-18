import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import signupBackground from '../../../images/signup_background.png'
import fbButton from '../../../images/fbbutton.png'
import active from '../../../images/active_underline.png'
import inactive from '../../../images/inactive_underline.png'
import '../styles/Signup.css'

class Signup extends Component{

  render(){

    return (

      <div id="signupContainer">

        <div id="imgContainer">

          <img src={signupBackground} alt="Generic background" />

          <div id="formContainer">

            <div id="linksContainer">
              <Link to="/signin"
                  id="signinLink">Sign in</Link>
              <img id="signinUnderline"
                  style={{
                  position : 'absolute' ,
                  top : '50px' ,
                  left : '61px'
                }}
                  src={inactive}
                alt="Inactive underline"/>

              <Link to="/signup"
                    id="signupLink"><strong>Sign up</strong></Link>
              <img id="signupUnderline"
                  src={active}
                style={{
                  position : 'absolute' ,
                  top : '50px' ,
                  right : '41px'
                }}
                  alt="Active underline"/>
            </div>

            <form>
              <input type="text"
                placeholder="E-mail"/>
              <input type="text"
                placeholder="Username"/>
              <input type="text"
                  placeholder="Password"/>
              <input type="text"
                placeholder="Location of birth"/>
              <input type="text"
                  placeholder="Date of birth"/>
              <input type="text"
                  placeholder="Time of birth"/>
              <br /> <br />
              <span style={{
                textAlign : 'center',
                paddingRight: '45px'
              }}>
                 connect with
                <img id="fbButton"
                    src={fbButton}
                    style={{
                    position : 'absolute' ,
                    top : '469px' ,
                    left : '175px'
                  }}
                    alt="Facebook button"/>
              </span>
            </form>

          </div>

          <button id="submit">Next</button>

        </div>

      </div>
    )
  }
}

export default Signup
