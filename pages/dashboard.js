import { useState, useEffect } from "react";
import Link from "next/link";

const Dashboard = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)


    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }

        fetchDashboardData()
    },[])

    if(isLoading) {
        return <div style={{ width: "775px", margin: "0 auto"}}>
            Data are loading ...
        </div>
    }
    return <div style={{ width: "775px", margin: "0 auto"}}>
        <Link href="/">Back to homepage</Link>
        <h2>Dashboard</h2>
        <ul>
            <li>Posts - {dashboardData.posts}</li>
            <li>Likes - {dashboardData.likes}</li>
            <li>Followers - {dashboardData.followers}</li>
            <li>Following - {dashboardData.following}</li>
        </ul>
    </div>


}

export default Dashboard