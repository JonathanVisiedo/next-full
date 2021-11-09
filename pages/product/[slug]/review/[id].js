import {useRouter} from "next/router"
import Link from 'next/link'

const Review = () => {
    const router = useRouter()
    const slug = router.query.slug
    const id = router.query.id
    return <>
        <Link href="/">Back to homepage</Link>
        <h1>Review {id} for product {slug}</h1>
    </>
}

export default Review