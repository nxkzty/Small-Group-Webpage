import {getAllPosts} from "@/lib/api/posts";
import {formatDate} from "@/lib/formatDate";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Button} from "primereact/button";
import style from "@/pages/AboutPage.module.css";

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
        return {__html: rawHTML};
    };

    return (
        <div>
            <h1 style={{color: "grey", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img
                style={{marginRight: "5px"}}
                alt="Smallgroup Logo"
                src="https://cdn1.iconfinder.com/data/icons/winter-119/48/Jesus_Christ-512.png"
                height="40"
                onClick={() => setIsOpen(!isOpen)}
                />
                Christ in Focus: Experiences and Realizations</h1>
            {posts.map((post) => (
                <article key={post.id}>
                    <h2>
                        {post.title}
                        <span>{formatDate(post.createdAt)}</span>
                    </h2>

                    <p dangerouslySetInnerHTML={renderHTML(post.text.substring(0, 600) + "...")}/>

                    <Link href={`/posts/${post.id}`}>
                        <Button label="Read More" rounded/>
                    </Link>

                </article>
            ))}
        </div>
    );
}
