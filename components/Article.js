import Link from 'next/link'

const Article = ({article}) => {
    return (
        <div style={{ display:"inline-block",width:'25%', borderBottom: "1px solid #fb503b", padding: "10px"}}>
            <h4>
                <small><Link href={`/news/${article.category}`}>{article.category}</Link></small>
                <Link href={`/news/${article.id}`}>
                    {article.title}
                </Link>
            </h4>
            <p>
                {article.description}
            </p>
        </div>
    )

}

export default Article

