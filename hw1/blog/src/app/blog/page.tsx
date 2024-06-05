import Link from "next/link"
import posts from "@/data/posts.json"
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Blogs",
    description: "Blog app",
};


export default function BlogPage() {
    const Posts = posts

    return(
        <div>
            {Posts.map((post) => (
                <article className="p-10 " key={post.id}>
                    <Link href={`/blog/${post.id}`} passHref>
                        <h2 className="font-bold" >{post.title}</h2>
                    </Link>
                    <p style={{paddingBottom: "30px"}} >{post.description}</p>
                </article>
            ))}
        </div>
    )
}