import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/main'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

import CookieStandAdmin from '../components/Cookie_stand_admin'
import LoginForm from '../components/Login_form'

export default function Home() {

  const [userName, setUserName] = useState('mohammad')
  const [savedPassword, setPassword] = useState('moh123456789')
  const [loggedIn, setLoggedIn] = useState(false)

  function change(username, password){
    if (username == userName && password == savedPassword){
      setLoggedIn(true)
    }

  }
  
  return(
    <div className="bg-green-100">
      {
        loggedIn? <CookieStandAdmin user={userName}/> : <LoginForm state={change}/>
      }

    </div>
  )


}

