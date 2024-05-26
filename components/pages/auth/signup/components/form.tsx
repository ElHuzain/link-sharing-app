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
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import useSignUp from "@/api/auth/useSignUp"
import Image from "next/image"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    repeatPassword: z.string().min(8)
}).refine(data => data.password === data.repeatPassword, {
    message: 'Passwords must match',
    path: ['repeatPassword'],
});

export default function SignUpForm() {

    const { signup, loading } = useSignUp();
    const Router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            repeatPassword: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await signup(values.email, values.password);
        if (!res.success) console.error(res.message)
        else Router.replace("/home")
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
                                {/* @ts-ignore */}
                                <Input icon={<Image width="24" height="24" alt="" src="/images/input/icon-email.svg" />} placeholder="e.g. a.huzain98@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
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
                                {/* @ts-ignore */}
                                <Input icon={<Image width="24" height="24" alt="" src="/images/input/icon-password.svg" />} placeholder="At least 8 characters" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="repeatPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Repeat Password</FormLabel>
                            <FormControl>
                                {/* @ts-ignore */}
                                <Input icon={<Image width="24" height="24" alt="" src="/images/input/icon-password.svg" />} placeholder="At least 8 characters" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={loading} className="w-full" type="submit">
                    {
                        loading ? "Creating account.." : "Create new account"
                    }
                </Button>
            </form>
        </Form>
    )
}