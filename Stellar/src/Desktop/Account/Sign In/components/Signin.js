import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import signupBackground from '../../../images/signup_background.png'
import fbButton from '../../../images/fbbutton.png'
import active from '../../../images/active_underline.png'
import inactive from '../../../images/inactive_underline.png'
import '../styles/Signin.css'

class Signin extends Component{

  render(){

    return (

      <div id="signinContainer">

        <div id="imgContainer">

          <img src={signupBackground} alt="Generic background"></img>

          <div id="formContainer" className="centeredText">

            <div id="linksContainer">
              <Link to="/signin"
                    id="signinLink"><strong>Sign in</strong></Link>
              <img id="signinUnderline"
                  src={active}
                  style={{
                  position : 'absolute' ,
                  top : '50px' ,
                  left : '38px'
                }}
                alt="Inactive underline"/>

              <Link to="/signup"
                  id="signupLink">Sign up</Link>
              <img id="signupUnderline"
                src={inactive}
                style={{
                  position : 'absolute' ,
                  top : '50px' ,
                  right : '65px'
                }}
                alt="Active underline"/>
            </div>

            <form>
              <input type="text"
                  placeholder="Username"/>
              <input type="text"
                placeholder="Password"/>
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
                    top : '224px' ,
                    left : '175px'
                  }}
                    alt="Facebook button"/>
              </span>
            </form>

            <br /> <br /> <br /> <br />
            <Link to="/forgotpassword"
                id="forgotPasswordLink">Forgot your password?</Link>

          </div>

          <button id="submit">Next</button>

        </div>

      </div>
    )
  }
}

export default Signin
