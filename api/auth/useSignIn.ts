import { login } from '@/data/firebase-fn'
import { useState } from 'react';

const useSignIn = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const signin = async (email: string, password: string) => {
        setLoading(true);

        try {
            const res = await login(email, password);
            return res;
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
        signin,
        loading
    }
}

export default useSignIn