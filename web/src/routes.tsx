import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

//import Login from './pages/Login'
// import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import SignUp from './pages/SingUp'

function Routes(){
  return(
    <BrowserRouter>
    <Route path="/" exact component={SignUp}/>
    <Route path="/study" component={TeacherList}/>
    <Route path="/give-classes" component={TeacherForm}/>
    </BrowserRouter>
  )
}

export default Routes