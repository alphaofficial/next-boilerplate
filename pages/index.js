// This page has defined `getInitialProps` to do data fetching.
// Next.js will execute `getInitialProps`
// It will wait for the result of `getInitialProps`
// When the results comes back Next.js will render the page.
// Next.js wil do this for every request that comes in.
import fetch from 'isomorphic-unfetch'



function HomePage({jokes}) {
    return <div>Chuck norris joke: {jokes}</div>
}

HomePage.getInitialProps = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const json = await res.json()
    return { jokes: json.value }
}
  
export default HomePage