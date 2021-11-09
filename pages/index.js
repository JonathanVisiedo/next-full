import Link from 'next/link'
import {useRouter} from "next/router";
import User from "../components/User";

const Home = ({users}) => {

    const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        router.push('/product')
    }

    return <div style={{ width:"1100px", margin:"0 auto" }}>
        <h1>Hello world</h1>

        <div style={{marginTop: "2px"}}>
            <div>
                <Link href="/blog">Blog</Link>
            </div>
            <div>
                <Link href="/news">News</Link>
            </div>
            <div>
                <Link href="/product">Product</Link>
            </div>
            <div>
                <Link href="/docs">Docs</Link>
            </div>

            <button onClick={handleClick}>
                PLACE ORDER
            </button>

            <h1>Users list</h1>
            <div style={{ marginTop: "10px", marginBottom: "10px"}}>
                {
                    users.map((user, idx) => {
                        return <User user={user} key={`u${user.id}`}/>
                    })
                }
            </div>
        </div>
    </div>
}

export default Home

export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            users:data
        },
    }
}
