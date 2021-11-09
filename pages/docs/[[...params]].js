import { useRouter } from 'next/router'
import Link from 'next/link'

const Doc = () => {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)

    if(params.length === 2) {
        return  (
            <>
                <Link href="/">Back to homepage</Link>
                <h1>
                    Viewing docs for feature {params[0]} & concept {params[1]}
                </h1>
            </>
        )
    } else if (params.length === 1) {
        return (
            <>
                <Link href="/">Back to homepage</Link>
                <h1>
                    Viewing Docs for feature {params[0]}
                </h1>
            </>
        )
    } else {
        return <>
            <Link href="/">Back to homepage</Link>
            <h1>Doc</h1>
        </>
    }

}

export default Doc