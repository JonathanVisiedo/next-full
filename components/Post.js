import Link from 'next/link'
const User = ({post}) => {
    return (
        <div style={{ display:"inline-block",width:'25%', borderBottom: "1px solid black", padding: "10px"}}>
            <h4>
                <Link href={`/blog/${post.id}`}>
                    {post.title}
                </Link>
            </h4>
            <p>{post.user?.name}</p>
            <p>@ : {post.user?.email}</p>
        </div>
    )

}

export default User