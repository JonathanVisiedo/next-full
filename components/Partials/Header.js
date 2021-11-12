import {useUser} from "@auth0/nextjs-auth0";
import Link from 'next/link'
import Image from "next/image";
import img from "../../public/1.jpg";


const Header = () => {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return <div className={'layout-header'}>
        {
            user ? (<div className={'userCard'}>
                        <Image src={user.picture} loader={() => user.picture} alt="" width={40} height={40}/>
                        <small style={{marginBottom: "15px"}}>Welcome {user.nickname}!</small>
                        <Link href="/api/auth/logout"><button>Logout</button></Link>
                    </div>
            ) : (
                <Link href="/api/auth/login"><button>Login</button></Link>
            )
        }

        <div className={'container navigation'}>
            <div>
                <Link href="/home">Homepage</Link>
            </div>
            <div>
                <Link href="/dashboard">Dashboard</Link>
            </div>
            <div>
                <Link href="/blog">Blog</Link>
            </div>
            <div>
                <Link href="/comments">Comments</Link>
            </div>
            <div>
                <Link href="/news">News</Link>
            </div>
            <div>
                <Link href="/events">Events</Link>
            </div>
            <div>
                <Link href="/about">About</Link>
            </div>

            <div>
                <Link href="/product">Product</Link>
            </div>
            <div>
                <Link href="/docs">Docs</Link>
            </div>
        </div>


    </div>;

}

export default Header