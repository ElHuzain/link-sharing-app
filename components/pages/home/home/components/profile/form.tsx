"use client"
import UploadImageInput from './uploadImageInput'
import UserDetailsInput from './userDetailsInput'
import SaveButton from './saveButton'

import {
    Form,
} from "@/components/ui/form"
import useManageProfile from '@/hooks/useManageProfile'


const FormComponent = () => {

    const { form, onSubmit, imageUploader, userData, uploadedImageReference, handleImageUpload, canSubmit, loading } = useManageProfile();

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