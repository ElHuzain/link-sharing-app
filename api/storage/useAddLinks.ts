import { addLinks } from '@/data/firebase-fn'
import { link } from '@/globalTypes';
import { removeSecure } from '@/utils/formatUrl';

const useAddLinks = () => {
    const post = async (email: string, links: link[]) => {

        // Remove HTTPs if any.
        const filteredLinks = links.map((link) => {
            return {
                platform: link.platform,
                // TODO: Should I keep or remove ID?
                url: removeSecure(link.url)
            }
        })

        try {
            const res = await addLinks(email, filteredLinks);
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

export default useAddLinks