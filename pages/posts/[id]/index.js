import { deletePost, getPostById } from "@/lib/api/posts";
import styles from "./index.module.css";
import { useSession } from "@/lib/hooks/session";
import { Button } from 'primereact/button';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostPage() {
    const { session } = useSession();
    const user = session.user;
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);

    useEffect(() => {
        if(!id) return;
        const loadPost = async () => {
            try {
                const post = await getPostById(id);
                setPost(post);
            } catch (e) {
                console.log(e);
                if (e.status === 404) router.push("/404");
            }
        };
        loadPost();
    }, [id]);

    const handleDeleteClick = async (e) => { 
        e.preventDefault();
        if (confirm("Delete post?")) {
            try {
                await deletePost(post.id, session.token);
                alert("Post deleted!");
                router.push("/");
            }
            catch(e) {
                alert("Ein Fehler ist aufgetreten.");
            }
        }
    };

    const renderHTML = (rawHTML) => {
        return { __html: rawHTML };
    };

    return post && (
        <article>
            <h1>{post.title}</h1>

            <p dangerouslySetInnerHTML={renderHTML(post.text)} />

            <div className={styles.admin}>
                {
                    user && (
                        <>
                            <Link href={`/posts/${post.id}/edit`}>
                                <Button label="Edit" style={{marginRight: "20px"}}  />
                            </Link>

                            <Button label="Delete" onClick={handleDeleteClick} />
                        </>
                    )
                }
            </div>
        </article>
    );
}
