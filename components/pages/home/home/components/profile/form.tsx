"use client"
import React, { useEffect, useRef, useState } from 'react'
import UploadImageInput from './uploadImageInput'
import UserDetailsInput from './userDetailsInput'
import SaveButton from './saveButton'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
} from "@/components/ui/form"
import useUploadProfileImage from '@/api/storage/useUploadProfileImage'
import useSubscribeToUserDetails from '@/hooks/useSubscribeToUserDetails'
import useSetUserDetails from '@/api/storage/useSetUserDetails'

const formSchema = z.object({
    username: z.string().min(4).max(12).nullable(),
    description: z.string().min(3).max(40).nullable(),
})

const FormComponent = () => {
    const [uploadedImage, setUploadedImage] = useState<null | File>(null);
    const [uploadedImageReference, setUploadedImageReference] = useState<string | null>(null);
    const willFetch = useRef<boolean>(false);

    const { userData, fetchUserDetails, loading } = useSubscribeToUserDetails();
    const userDetailsSetter = useSetUserDetails();
    const imageUploader = useUploadProfileImage();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        if (!loading) {
            form.setValue("username", userData.username);
            form.setValue("description", userData.description);
        }
    }, [loading])

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setUploadedImage(file);
            const url = URL.createObjectURL(file);
            setUploadedImageReference(url);
        }
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {

        // If there's an image uploaded
        if (uploadedImageReference) {
            const res = await imageUploader.post(userData.email, uploadedImage!);
            if (res?.success) await fetchUserDetails();
            setUploadedImage(null);
            setUploadedImageReference(null);
            willFetch.current = true;
        }

        // If there's new user data
        if (values.username !== userData.username) {
            await userDetailsSetter.post(userData.email, { username: values.username! });
            willFetch.current = true;
        }

        if (values.description !== userData.description) {
            await userDetailsSetter.post(userData.email, { description: values.description! });
            willFetch.current = true;
        }


        if (willFetch.current) {
            const res = await fetchUserDetails();
            willFetch.current = false;
        }
    }

    const canSubmit = !!uploadedImageReference || form.watch().username !== userData.username || form.watch().description !== userData.description;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full">
                <div className="space-y-8">
                    <UploadImageInput imageSrc={userData.imageSrc} loading={imageUploader.loading || loading} uploadedImageReference={uploadedImageReference} handleImageUpload={handleImageUpload} />
                    <UserDetailsInput form={form} />
                </div>
                <SaveButton canSubmit={canSubmit} />
            </form>
        </Form>
    )
}

export default FormComponent