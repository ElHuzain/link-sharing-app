import { createAccount, createUserDetails } from '@/data/firebase-fn'
import { useState } from 'react';

const useSignUp = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const signup = async (email: string, password: string) => {
        setLoading(true);

        try {
            const res = await createAccount(email, password);
            if (!res.success) return res;
            const user = res.data?.user;
            const res2 = await createUserDetails(user!.email!);
            return res2;
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
        signup,
        loading
    }
}

export default useSignUp