import { getAllPosts } from "@/lib/api/posts"
import { formatDate } from "@/lib/formatDate"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./index.module.css"

export default function IndexPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const posts = await getAllPosts()
                setPosts(posts)
            } catch (e) {
                alert("Could not load posts!")
            }
        }
        loadPosts()
    }, [])

    return (
        <div className={styles.posts}>
            <h1>Welcome to my blog!</h1>
            {
                posts.map(post => {
                    return (
                        <article key={post.id}>
                            <h2>
                                {post.title}
                                <span className={styles.date}>
                                    {formatDate(post.createdAt)}
                                </span>
                            </h2>

                            <p>{post.text.substring(0, 600) + "..."}</p>

                            <Link href={`/posts/${post.id}`} className={styles.readmore}>
                                Read more
                            </Link>
                        </article>
                    )
                })
            }
        </div>
    )
}