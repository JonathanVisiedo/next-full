import Link from 'next/link'

const Event = ({event}) => {
    return (
        <div style={{ display:"inline-block",width:'100%', borderBottom: "1px solid #fb503b", padding: "10px"}}>
            <h4>
                <small>{event.id} - {event.date}</small> { event.title }
                <small>{event.category}</small>
            </h4>
            <p>
                {event.description}
            </p>
        </div>
    )

}

export default Event

