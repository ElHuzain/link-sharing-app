import { addLink } from '@/data/firebase-fn'
import { removeSecure } from '@/utils/formatUrl';

const useAddLink = () => {
    const post = async (email: string, platform: string, url: string) => {

        try {
            const res = await addLink(email, platform, removeSecure(url));
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
        post,
    }
}

export default useAddLink