import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Header from '../components/Store/Header/Header'
import Form from '../components/Register/Form'

const Register = () => {
  return (
    <>
        <NavBar/>
        <Header title="MI CUENTA"/>
        <Form/>
        <Footer/>
    </>
  )
}

export default Register