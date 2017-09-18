import React , { Component } from 'react'
import { Route , Switch } from 'react-router-dom'
import './App.css'
import Home from './Desktop/Home/components/Home.js'
import AccountSettings from './Desktop/Account/Settings/components/AccountSettings'
import SearchPreferences from './Desktop/Account/Preferences/components/SearchPreferences'
import EditProfile from './Desktop/Account/Profile/components/EditProfile'
import ViewProfile from './Desktop/Account/Profile/components/ViewProfile'
import Horoscopes from './Desktop/Horoscopes/components/Horoscopes'
import PersonalAnalysis from './Desktop/Horoscopes/components/PersonalAnalysis'
import Signup from './Desktop/Account/Sign Up/components/Signup'
import Signin from './Desktop/Account/Sign In/components/Signin'
import NotFound from './Desktop/Error/404/components/Error404'
import ExplorationHome from './Desktop/Exploration/components/ExplorationHome'
import Chat from './Desktop/Chat/components/Chat'

class App extends Component {

  render(){
    return (
      <div id="appContainer">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={AccountSettings} />
          <Route exact path="/preferences" component={SearchPreferences} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/viewprofile" component={ViewProfile} />
          <Route exact path="/horoscopes" component={Horoscopes} />
          <Route exact path="/analysis" component={PersonalAnalysis} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/exploration" component={ExplorationHome} />
          <Route exact path="/chat" component={Chat} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
