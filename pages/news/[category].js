import Link from "next/link";
import Article from "../../components/Article";

const Category = ({ articles, category }) => {

    return <div style={{ width: "775px", margin: "0 auto"}}>
        <div><Link href="/">Return to homepage</Link></div>
        <div><Link href="/news">Return to Articles</Link></div>
        <h1>List of news <i style={{color: "grey"}}>{category}</i></h1>
        {
            articles.map((article, idx) => {
                return <Article article={article} key={`a${article.id}`}/>
            })
        }
    </div>

}

export default Category


export async function getServerSideProps (context) {
    const { params, req, res } = context
    const response = await fetch(`http://localhost:4000/news?category=${params.category}`)
    const articles = await response.json()

    return {
        props: {
            articles,
            category: params.category
        }
    }


}