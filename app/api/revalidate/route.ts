
import { parseBody } from "next-sanity/webhook";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { body, isValidSignature } = await parseBody<{
            _type:string,
            slug:{
                current:string
            }
        }>(req, process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET);
        
        if (!isValidSignature) {
            return new Response("Invalid Signature", { status: 401 });
        }

        if (!body?._type) {
            return new Response("Bad Request", { status: 400 });
        }

        revalidatePath(`/${body._type}`)
        revalidatePath(`/${body._type}/${body.slug?.current}`)
            if(body._type === 'project') {
                revalidatePath(`/`)
            }

        return NextResponse.json({
            status: 200,
            revalidated: true,
            now: Date.now(),
            body,
        });
    } catch (error: any) {
        console.error(error);
        return new Response(error.message, { status: 500 });
    }
}