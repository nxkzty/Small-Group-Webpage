import { createPost, updatePost } from "@/lib/api/posts"
import { useSession } from "@/lib/hooks/session"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "./Create.module.css"
import { Editor } from "primereact/editor";
import { Button } from "primereact/button"

const defaultModel = {
    title: "",
    text: ""
}

function validateModel(post) {
    const errors = {
        title: "",
        text: ""
    }
    let isValid = true

    if (post.title.trim().length === 0) {
        errors.title = "Title can't be empty"
        isValid = false
    }

    if (post.text.trim().length === 0) {
        errors.text = "Text can't be empty"
        isValid = false
    }

    return { errors, isValid }
}

export default function PostForm({ postToEdit }) {
    const { session } = useSession()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    const [post, setPost] = useState(defaultModel)
    const [editorContent, setEditorContent] = useState("")

    useEffect(() => {
        if (postToEdit) {
            setPost(postToEdit)
        }
    }, [postToEdit])


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost({
            ...post,
            [name]: value
        });
    };

    const handleEditorChange = (e) => {
        const editorText = e.htmlValue;
        setEditorContent(editorText);
        setPost((prevPost) => ({
            ...prevPost,
            text: editorText
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(post)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }


        if (post.id) {
            try {
                await updatePost(post, session.token)
                alert("Post updated!")
                router.push(`/posts/${post.id}`)
            } catch (e) {
                alert("Could not update post")
            }
        } else {
            try {
                const newPost = await createPost(post, session.token)
                alert("Post created!")
                router.push(`/posts/${newPost.id}`)
            } catch (e) {
                alert("Could not create post")
            }
        }
        setIsLoading(false)
    }

    return (
        <div className={styles.postform}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} value={post.title} />
                    {errors.title && <div className={styles.error}>{errors.title}</div>}
                </fieldset>

                <fieldset>
                    <label>Text:</label>
                    <Editor value={editorContent} onTextChange={handleEditorChange} style={{ height: '320px' }} />
                    {errors.text && <div className={styles.error}>{errors.text}</div>}
                </fieldset>

                <Button label="Submit" disabled={isLoading}>
                    {isLoading}
                </Button>
            </form>
        </div>
    );
}