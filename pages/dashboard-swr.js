import useSWR from 'swr'
import Link from "next/link";

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}

const DashboardSwr = () => {


    const { data, error } = useSWR('dashboard', fetcher)

    if(error) return <div>An error occured</div>
    if(!data) return <div>Loading ...</div>

    return <div style={{ width: "775px", margin: "0 auto"}}>
        <Link href="/">Back to homepage</Link>
        <h2>Dashboard</h2>
        <ul>
            <li>Posts - {data.posts}</li>
            <li>Likes - {data.likes}</li>
            <li>Followers - {data.followers}</li>
            <li>Following - {data.following}</li>
        </ul>
    </div>


}

export default DashboardSwr