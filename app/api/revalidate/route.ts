
import { parseBody } from "next-sanity/webhook";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { body, isValidSignature } = await parseBody<{
            _type: string,
            _createdAt: string,
            _updatedAt: string,
            slug: {
                current: string
            },
            thumbnail: {
                asset: {
                    _ref: string
                }
            },
            title: string,
            description: string,
        }>(req, process.env.NEXT_PUBLIC_SANITY_WEBHOOK_SECRET);

        if (!isValidSignature) {
            return new Response("Invalid Signature", { status: 401 });
        }

        if (!body?._type) {
            return new Response("Bad Request", { status: 400 });
        }

        console.log(body)
        if (body._type === 'project') {
            revalidatePath(`/`)
            revalidatePath(`/projects`)
            revalidatePath(`/projects/${body.slug?.current}`)
        }
        else if (body._type === 'blog') {
            revalidatePath(`/blog`)
            revalidatePath(`/blog/${body.slug?.current}`)
            revalidatePath('/sitemap.xml')

            if (body._createdAt === body._updatedAt) {
                await fetch('https://api.brevo.com/v3/emailCampaigns', {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                        'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!
                    },
                    body: JSON.stringify({
                        sender: { name: 'Sanjay', email: 'borasanju81@gmail.com' },
                        recipients: { listIds: [4] },
                        params: {
                            title: body.title,
                            description: body.description,
                            thumbnail: `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${body.thumbnail.asset._ref.split('-').slice(1).join('-').replace(/-(?=[^-]*$)/, '.')}`,
                            url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${body.slug?.current}`
                        },
                        templateId: 6,
                        replyTo: 'sanjaybora380@gmail.com',
                        name: body.title,
                        subject: 'New Blog Post',
                        previewText: body.title
                    })
                })
            }
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