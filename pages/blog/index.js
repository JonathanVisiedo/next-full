import Link from 'next/link'
import Post from "../../components/Post";

const Blog = ({ posts }) => {
    return (
        <div style={{ width: "1100px", margin: "0 auto"}}>
            <Link href="/">Return to homepage</Link>
            <h1>Blog</h1>
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