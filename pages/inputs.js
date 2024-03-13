import { getAllPosts } from "@/lib/api/posts";
import { formatDate } from "@/lib/formatDate";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";

export default function IndexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const posts = await getAllPosts();
                setPosts(posts);
            } catch (e) {
                alert("Could not load posts!");
            }
        };
        loadPosts();
    }, []);

    const renderHTML = (rawHTML) => {
        return { __html: rawHTML };
    };

    return (
        <div >
            <h1>Inputs</h1>
            {posts.map((post) => (
                <article key={post.id}>
                    <h2>
                        {post.title}
                        <span >{formatDate(post.createdAt)}</span>
                    </h2>

                    <p dangerouslySetInnerHTML={renderHTML(post.text.substring(0, 600) + "...")} />

                    <Link href={`/posts/${post.id}`} >
                        <Button label="Read More" rounded />
                    </Link>

                </article>
            ))}
        </div>
    );
}
