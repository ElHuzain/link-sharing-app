import { getUserDetailsByUsername } from '@/data/firebase-fn'
import { useState } from 'react';

const useGetUserDetailsByUsername = () => {
    const [loading, setLoading] = useState<boolean>(true);

    const get = async (username: string) => {

        if (!loading) setLoading(true);

        try {
            const res = await getUserDetailsByUsername(username);
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
        get,
        loading
    }
}

export default useGetUserDetailsByUsername