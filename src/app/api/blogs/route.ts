
import { NextResponse } from "next/server";
import { addBlog } from "@/db/puts";
import { getBlogs } from "@/db/gets";
import { z } from "zod";
// import { deleteBlog } from "@/db/deletes";
const schema = z.object({
    type: z.string(),
    title: z.string(),
    content: z.string().optional(),
    imageUrl: z.string().optional(),
    videoUrl: z.string().optional(),
})

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        
        const type = data.get("type") as string;
        const title = data.get("title") as string;
        const content = data.get("content") as string;
        const imageUrl = data.get("imageUrl") as string;
        const videoUrl = data.get("videoUrl") as string;

        const result = await addBlog(type, title, content, imageUrl, videoUrl);
        return NextResponse.json({
            status: 200,
            data: "Blog added successfully",
        });
    }
    catch (error) {
        console.error("Something went wrong", error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }

}
export async function GET(){
    try {
        const blogs = await getBlogs();
        return NextResponse.json({ status: "success", data: blogs });
    }
    catch (e) {
        console.error("Something went wrong", e);
        return NextResponse.json(
            {
                error: e instanceof Error ? e.message : "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }
}
// export async function DELETE()
// {
//     export async function DELETE(req: Request) {
//         try {
//             const url = new URL(req.url);
//             const id = url.pathname.split("/").pop();
//             if (!id) {
//                 return NextResponse.json(
//                     { error: "Blog ID is required" },
//                     { status: 400 }
//                 );
//             }
//             await deleteBlog(id);
//             return NextResponse.json(
//                 { status: "success", message: "Blog deleted successfully" },
//                 { status: 200 }
//             );
//         } catch (error) {
//             console.error("Something went wrong", error);
//             return NextResponse.json(
//                 {
//                     error: error instanceof Error ? error.message : "Something went wrong",
//                 },
//                 {
//                     status: 500,
//                 }
//             );
//         }
//     }
// }