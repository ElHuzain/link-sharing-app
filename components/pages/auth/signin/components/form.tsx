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
import Image from "next/image"
import toast from "react-hot-toast"
import Success, { Error } from "@/components/ui/customToast"
import formatFirebaseResponse from "@/utils/formatFirebaseResponse"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export default function SignInForm() {

    const { signin, loading } = useSignIn();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await signin(values.email, values.password);
        if (!res.success) {
            return toast.custom(<Error message={formatFirebaseResponse(res.message)} />);
        }
        toast.custom(<Success message="Login successful" />);

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
                                <Input type="password" icon={<Image width="24" height="24" alt="" src="/images/input/icon-password.svg" />} placeholder="Enter your password" {...field} />
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