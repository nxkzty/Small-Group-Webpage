import PostForm from "@/components/PostForm"
import styles from "../inputs.module.css"

export default function PostsCreatePage() {
    return (
        <div className={styles.postcreate}>
            <h1>Create new post</h1>
            <PostForm />
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            secured: false
        }
    }
}