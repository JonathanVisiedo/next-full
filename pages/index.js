import {useRouter} from "next/router";
import User from "components/User";
import Image from 'next/image'
import img from 'public/1.jpg'

const Home = ({users}) => {

    const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        router.push('/product')
    }

    return <div className='container'>
        <h1>Hello world <small>Analytics: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</small></h1>
        <button onClick={handleClick}>
            PLACE ORDER
        </button>

        <div style={{margin:"20px 0"}}>
            <Image src={img} alt="" placeholder='blur' width={450} height={240}/>
            <Image src="/1.jpg" alt="" width={450} height={240} placeholder={''}/>
        </div>

        <h1>Users list</h1>
        <div style={{ marginTop: "10px", marginBottom: "10px"}}>
            {
                users.map((user, idx) => {
                    return <User user={user} key={`u${user.id}`}/>
                })
            }
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
