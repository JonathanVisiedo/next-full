import Link from 'next/link'
import Post from "../../components/Post";
import {useUser} from "@auth0/nextjs-auth0";

const Blog = ({ posts }) => {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div style={{ width: "1100px", margin: "0 auto"}}>
            <Link href="/">Return to homepage</Link>
            <h1>Blog <small>Hello {user.nickname}</small></h1>
            <div style={{ marginTop: "20px", borderTop: "2px solid #fb503b"}}>
                {
                    posts.map((post, idx) => {
                        return <Post post={post} key={`p${idx}`} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog

export async function getStaticProps() {

    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    const fetchPost = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await fetchPost.json()

    await Promise.all(
        posts.map((post, idx) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then((response) => {
                    return response.json()
                })
                .then(user => {
                    return post.user = user
                })
        })
    );

    return {
        props: {
            posts:posts.slice(0,20)
        },
        revalidate: 10, // revalidate each 10sec
    }
}