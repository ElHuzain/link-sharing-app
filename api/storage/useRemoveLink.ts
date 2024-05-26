import { removeLink } from '@/data/firebase-fn'

const useRemoveLink = () => {
    const del = async (email: string, linkObject: { platform: string, url: string }) => {

        try {
            const res = await removeLink(email, linkObject);
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
        del,
    }
}

export default useRemoveLink