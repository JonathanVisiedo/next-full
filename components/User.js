
const User = ({user}) => {

    return (
        <div style={{ display:"inline-block",width:'25%', borderBottom: "1px solid black", padding: "10px"}}>
            <h2>
                {user.name}
            </h2>
            <p>
                {user.email}
            </p>
        </div>
    )

}

export default User