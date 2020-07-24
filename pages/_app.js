//add globl css here
import "../public/style.css"
import AuthContext from '../context/auth-context'
import authReducer from '../reducers/auth-reducer'
import {useReducer, useState, useEffect} from 'react'
import Cookie from 'js-cookie'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  const [isLoggedIn, setLoggedIn] = useState(false)

  const [state, dispatch] = useReducer(authReducer, {isLoggedIn: !isLoggedIn})
  
  const toggleLogin = () => {
    dispatch({type: 'toggle_login'})
  }

  useEffect(()=>{
    var loggedIn = Cookie.get("loggedIn")
    console.log(loggedIn)

    loggedIn && setLoggedIn(loggedIn)

  }, [])

 

  return  (
    <AuthContext.Provider value={{isLoggedIn: state.isLoggedIn, toggleLogin}}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}
