import Link from "next/link"
import { useRouter } from "next/router"

const CoffeeStore = () => {
    const router = useRouter()
    console.log("🚀 ~ file: [id].js:6 ~ CoffeeStore ~ router", router)
    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link href="/">Back to home</Link>
        </div>
    )
}

export default CoffeeStore