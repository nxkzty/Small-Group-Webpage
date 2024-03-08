import PostForm from "@/components/PostForm"
import { getPostById } from "@/lib/api/posts"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function PostsEditPage() {
    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (!id) return
        const loadPost = async () => {
            try {
                const post = await getPostById(id)
                setPost(post)
            } catch (e) {
                if (e.status === 404) router.push("/404")
            }
        }
        loadPost()
    }, [id])

    return post && (
        <div>
            <h1>Edit post</h1>
            <PostForm postToEdit={post} />
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            secured: true
        }
    }
}

export async function getStaticPaths(context) {
    return {
        fallback: true,
        paths: []
    }
}