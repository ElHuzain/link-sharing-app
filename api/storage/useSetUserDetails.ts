import { setUserDetails } from '@/data/firebase-fn'
import { useState } from 'react';

const useSetUserDetails = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const post = async (email: string, data: { username?: string, description?: string }) => {
        setLoading(true);

        try {
            const res = await setUserDetails(email, data);
            return res
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

export default useSetUserDetails