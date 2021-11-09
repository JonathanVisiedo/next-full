import Link from 'next/link'
const Error404 = () => {

    return <div style={{width:'1100px', margin: "0 auto", textAlign: "center"}}>
        <h1 style={{fontSize:"56px"}}>404</h1>
        <p>Sorry your page is not found on this server</p>
        <p><Link href="/">Go back to homepage</Link></p>
    </div>

}

export default Error404