import Event from '../components/Event'
import Link from "next/link";
import { useState } from 'react'
import { useRouter } from "next/router";


const EventList = ({ eventList }) => {
    const router = useRouter()
    const [events, setEvents] = useState(eventList)

    const fetchSportEvents = async (type = false) => {
        document.querySelector('.active')?.classList.remove('active')

        const response = await fetch(`http://localhost:4000/events${!type ?'': `?category=${type}`}`)
        const events = await response.json()
        setEvents(events)
        router.push(`/events?category=${type}`, undefined, { shallow: true })
    }

    return <div style={{ width: "775px", margin: "0 auto"}}>
        <div><Link href="/">Back to homepage</Link></div>
        <div style={{marginTop:"20px"}}>
            <button onClick={(e) => {
                fetchSportEvents('sports')
                e.target.classList.add('active')
            }}>Sport events</button>
            <button onClick={(e) => {
                fetchSportEvents('entreprise')
                e.target.classList.add('active')
            }}>Company events</button>
            <button onClick={(e) => {
                fetchSportEvents('concours')
                e.target.classList.add('active')
            }}>Concours events</button>
            <button onClick={(e) => {
                fetchSportEvents()
                e.target.classList.add('active')
            }}>All events</button>
        </div>

        {
            events.map((event) => {
                return <Event event={event} key={`e${event.id}`}/>
            })
        }

    </div>

}

export default EventList

export async function getServerSideProps(context) {

    const { query } = context
    const queryString = query.category ? `category=${query.category}` : ''
    const response = await fetch(`http://localhost:4000/events${`?`+queryString}`)
    const events = await response.json()


    return {
        props: {
            eventList: events
        }
    }

}