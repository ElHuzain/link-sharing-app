import { setUserDetails, uploadProfileImage } from '@/data/firebase-fn'
import { useState } from 'react';

const useUploadProfileImage = () => {
    const [loading, setLoading] = useState<boolean | null>(false);
    
    const post = async (email: string, image: Uint8Array | File) => {
        setLoading(true);

        try {

            const res = await uploadProfileImage(email, image, true);
            if (res.success) {
                await setUserDetails(email, { imageSrc: res.data! });
                return res;
            }
        } catch (err: any) {
            console.log("API Layer", err.code);
            return {
                success: false,
                message: err.code
            }
        } finally {
            setLoading(false);
        }
    }

    return {
        post,
        loading
    }
}

export default useUploadProfileImage