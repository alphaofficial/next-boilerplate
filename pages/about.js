import {useContext} from 'react'
import AuthContext from '../context/auth-context'
import HeadFile from '../components/head-file'

function AboutPage() {

    const data = useContext(AuthContext)
    console.log(data)
    return (
        <>
            <HeadFile title="About Page"/>
            <div>Hello world</div>
            <p>{data.isLoggedIn ? 'Logged In' : 'Logged out' }</p>
            <a href="/">Home</a>
            <button onClick={data.toggleLogin}>{data.isLoggedIn ? 'Logout' : 'Login' }</button>
        </>
    )
}

  
export default AboutPage