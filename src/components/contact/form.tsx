"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "../ui/card"
import { Textarea } from "../ui/textarea"
import axios from "axios"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(1, { message: "Required" }),
    email: z.string().email(),
    message: z.string()
})

export function ContactForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const id = toast.loading('Submitting...')
        try {
            const res = await axios.post('/api/submit', {
                ...values,
                referrerUrl: document.referrer,
                sourceUrl: window.location.href
            })
            if (res.status == 200) {
                toast.success('Form Submitted Successfully🎉', { id })
            } else {
                toast.error('Error Submitting form!!', { id })
            }
        } catch (e) {
            toast.error('Error Submitting form!!', { id })
        }
    }

    return (
        <div className="m-5 mt-10">
            <Card className="max-w-lg mx-auto p-3">
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2" >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    < FormControl >
                                        <Input placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    < FormMessage />
                                </FormItem>
                            )
                            }
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    < FormControl >
                                        <Input placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    < FormMessage />
                                </FormItem>
                            )
                            }
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    < FormControl >
                                        <Textarea placeholder="Enter your message" {...field} />
                                    </FormControl>
                                    < FormMessage />
                                </FormItem>
                            )
                            }
                        />
                        < Button type="submit" className="!mt-3"> Submit </Button>
                    </form>
                </Form>
            </Card>
        </div>
    )
}
