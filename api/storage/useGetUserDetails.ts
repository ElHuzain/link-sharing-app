import { addLink, getUserDetails } from '@/data/firebase-fn'

const useGetUserDetails = () => {
    const get = async (email: string) => {

        try {
            const res = await getUserDetails(email);
            return res
        } catch (err: any) {
            console.log("API Layer", err.code);
            return {
                success: false,
                message: err.code
            }
        }
    }

    return {
        get,
    }
}

export default useGetUserDetails