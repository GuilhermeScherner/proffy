import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './pages/Login'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import SignUp from './pages/SingUp'
import ForgotPage from './pages/ForgotPage'

function Routes(){
  return(
    <BrowserRouter>
    <Route path="/" exact component={Login}/>
    <Route path="/Signup" component={SignUp}/>
    <Route path="/password_reset" component={ForgotPage}/>
    <Route path="/landing" component={Landing}/>    
    <Route path="/study" component={TeacherList}/>
    <Route path="/give-classes" component={TeacherForm}/>
  
    </BrowserRouter>
  )
}

export default Routes