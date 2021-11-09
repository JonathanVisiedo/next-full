import Article from "../../components/Article";
import Link from "next/link";

const News = ({ articles }) => {
    return <div style={{ width: "775px", margin: "0 auto"}}>
        <div><Link href="/">Return to homepage</Link></div>
        <div><Link href="/news">Return to Articles</Link></div>

        <h1>List of News Articles</h1>
        {
            articles.map((article, idx) => {
                return <Article article={article} key={`a${article.id}`}/>
            })
        }
    </div>
}

export default  News

export async function getServerSideProps() {

    const response = await fetch("http://localhost:4000/news")
    const articles = await response.json()

    return {
        props: {
            articles: articles
        }
    }

}