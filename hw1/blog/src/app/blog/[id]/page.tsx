import posts from "@/data/posts.json"
import {id} from "postcss-selector-parser";
import type {Metadata, ResolvingMetadata} from "next";

interface Post{
    id: number;
    date: string;
    title: string;
    description: string;
    author: string;

}

type Props = {
    params: { id: number }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id: number = params.id


    const product = posts[id-1]

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: product.title,
    }
}


export default function BlogDetailPage({params}: {params: {id: number}}) {
    const Posts = posts;
    const Post = posts[params.id -1];

    return (
        <div className="py-5 px-5">
            <h1 className="font-bold text-3xl">
                {Post.title}
            </h1>
            <p className="pt-10">
                {Post.description}
            </p>
            <p className="pt-10">{Post.author}, {Post.date}</p>


        </div>
    )
}