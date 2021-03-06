import {useContext} from 'react'
import AuthContext from '../context/auth-context'
import Link from 'next/link'
import HeadFile from '../components/head-file'

function HomePage() {

    const data = useContext(AuthContext)
    console.log(data)
    return (
        <>
            <HeadFile title="Home Page"/>
            <div>Hello world</div>
            <p>{data.isLoggedIn ? 'Logged In' : 'Logged out' }</p>
            <Link href="/about"><a>About Page</a></Link>
            <button onClick={data.toggleLogin}>{data.isLoggedIn ? 'Logout' : 'Login' }</button>
        </>
    )
}

  
export default HomePage