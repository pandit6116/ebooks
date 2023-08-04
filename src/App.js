import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Loginpage from "./Components/Loginpage"
import First from "./Components/First"
import {Route, Switch, Redirect} from "react-router-dom"
import UserHome from "./Components/UserHome" 
import AdminHome from "./Components/AdminHome"
import Signup from "./Components/Signup"
import AdminUser from "./Components/AdminUser"
import AdminSub from './Components/AdminSub'



const App = () => {
  window.localStorage.setItem("user","user")
  return (
    <>
    <Switch>
      <Route  exact path="/" component={First} />
      <Route  exact path="/Signup" component={Signup} />
      <Route exact path="/loginpage" component={Loginpage}/>
      <Route exact path="/AdminHome" component={AdminHome}/>
      <Route exact path="/AdminUser" component={AdminUser}/>
      <Route exact path="/UserHome" component={UserHome}/>
      <Route exact path="/AdminSub" component={AdminSub}/>
      <Redirect to="/"/>
    </Switch>
    
    </>
  )
}

export default App
