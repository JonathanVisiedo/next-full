import Link from "next/link";
import {useState} from "react";

const CommentList = () => {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('http://localhost:3000/api/comments')
        const data = await response.json()
        setComments(data.comments)
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method:'POST',
            body: JSON.stringify({comment}),
            headers:{
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        await fetchComments()
        setComment('')
    }

    const deleteComment = async commentId => {
        const response = await fetch(`http://localhost:3000/api/comments/${commentId}`, {
            method:'DELETE',
            body: JSON.stringify(commentId),
            headers:{
                'Content-type': 'applicatino/json'
            }
        })
        const data = await response.json()
        await fetchComments()
    }

    return <div style={{width: "775px", margin: "0 auto"}}>
        <div><Link href="/">Back to homepage</Link></div>

        <div style={{margin: "15px 0"}}>
            <input type="text" placeholder={'Send your comment'} value={comment}
                   onChange={(e) => setComment(e.target.value)}/>
            <button onClick={submitComment}>Send</button>
        </div>

        <div>
            <button onClick={fetchComments}>Load comments</button>
        </div>
        <div>
            <ul>
                {comments.map((comment) => {
                    return <li key={`c${comment.id}`}>{comment.id} - {comment.text} <button className={'dynamic'} onClick={() => deleteComment(comment.id)}>&times;</button></li>
                })}
            </ul>
        </div>
    </div>

}

export default CommentList