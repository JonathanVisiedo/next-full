//import { useRouter } from 'next/router'
import Link from 'next/link'
import Post from "../../components/Post";

const BlogPost = ({ post }) => {
    //const router = useRouter()

    // if(router.isFallback) {
    //     return <div style={{ width: "1100px", margin: "0 auto"}}>
    //         <h1>Loading ...</h1>
    //     </div>
    // }
    return <div style={{ width: "1100px", margin: "0 auto"}}>
        <Link href="/blog">Return to blog</Link>
        <h1>{ post.title ?? 'Post not found' }</h1>
        <div style={{ marginTop: "20px", borderTop: "2px solid #fb503b", paddingTop: "20px"}}>
            {post.body ?? 'Try another id'}
        </div>
    </div>
}

export default BlogPost

export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    const dataSet = posts.slice(0,20)

    const paths = dataSet.map((post) => ({
        params: {
            postId: `${post.id}`
        },
    }))

    return { paths, fallback: "blocking" }
}

export async function getStaticProps(context) {
    let { params } = context
    const fetchPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    let post = await fetchPost.json()

    if(!post.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: post
        }
    }
}




