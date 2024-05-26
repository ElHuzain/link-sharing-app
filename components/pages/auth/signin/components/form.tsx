"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import useSignIn from "@/api/auth/useSignIn"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export default function SignInForm() {

    const toast = useToast();
    const { signin, loading } = useSignIn();
    const Router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await signin(values.email, values.password);
        if (!res.success) console.error(res.message)
        // else Router.replace("/home")
        toast.toast({ title: "Hayo!", description: "Logged in!" })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input icon={<Image width="24" height="24" alt="" src="/images/input/icon-email.svg" />} placeholder="e.g. a.huzain98@gmail.com" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input icon={<Image width="24" height="24" alt="" src="/images/input/icon-password.svg" />} placeholder="Enter your password" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button disabled={loading} className="w-full" type="submit">
                    {
                        loading ? "Logging in.." : "Login"
                    }
                </Button>
            </form>
        </Form>
    )
}