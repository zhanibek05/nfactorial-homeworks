import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About   ",
    description: "Blog app",
};

export default function AboutPage() {
    return (

        <div className=" text-3xl flex min-h-screen flex-col items-center justify-center p-24">
            Page was created by Beisenov Zhanibek for first homework
        </div>

    )
}