import { useEffect, useRef, useState } from 'react'
import useSubscribeToUserDetails from './useSubscribeToUserDetails';
import useAddLink from '@/api/storage/useAddLink';
import useRemoveLink from '@/api/storage/useRemoveLink';
import generateUUID from '@/lib/generateUUID';
import { Link } from '@/state/dataSlice';
import isValidUrl from '@/utils/isValidUrl';
import toast from "react-hot-toast"
import Success from '@/components/ui/customToast';
import useAddLinks from '@/api/storage/useAddLinks';

export type localLink = {
    platform: string
    url: string
    id: string
    newLink?: boolean
    updatedLink?: boolean
}

const useManageLinks = () => {

    const [links, setLinks] = useState<localLink[] | []>([]);
    const [originalLinks, setOriginalLinks] = useState<localLink[] | []>([]);
    const addLinksAPI = useAddLinks();
    const removeLinkAPI = useRemoveLink();

    const { loading, userData, fetchUserDetails } = useSubscribeToUserDetails();

    const addLink = () => setLinks([...links, { platform: "", url: "", id: generateUUID(), newLink: true }]);

    const removeLink = async (id: string) => {
        const link = links.find(item => item.id === id);
        if (!link) return console.error("Link not found, cannot delete link.");

        if (link?.newLink) setLinks(prev => prev.filter(item => item.id !== id));
        else {
            await removeLinkAPI.del(userData.email, { platform: link!.platform, url: link!.url });
            await fetchUserDetails();
            setLinks(prev => prev.filter(item => item.id !== id));
        }
    }

    const updateLink = (id: string, field: string, value: string) => {
        // Get link from array
        const link = links.find(item => item.id === id);

        if (!link) return console.error("Link not found");

        // If new link, just edit it
        if (link.newLink) {
            setLinks(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item))
        }

        // If existing link, add updatedLink to true
        else {
            setLinks(prev => prev.map(item => item.id === id ? { ...item, [field]: value, updatedLink: true } : item))
        }
    }

    useEffect(() => {

        if (!loading) {
            const newLinksArr = userData.links.map((link: Link, i: number) => ({ ...link, id: generateUUID() }));
            setLinks(newLinksArr);
            setOriginalLinks(newLinksArr);
        }

    }, [loading]);


    const validateLinks = () => {

        for (let i = 0; i < links.length; i++) {
            const LinkItem = links[i];

            if (!LinkItem.platform || !LinkItem.url) {
                return {
                    success: false,
                    message: `Link #${i + 1} is missing fields`,
                    link: LinkItem
                }
            }

            if (!isValidUrl(LinkItem.url, LinkItem.platform)) {
                return {
                    success: false,
                    message: `Invalid URL for ${LinkItem.platform}.`,
                    link: LinkItem
                }
            }

            const duplicateLink = links.find(item => item.platform === LinkItem.platform && item.id !== LinkItem.id);
            if (duplicateLink) {
                return {
                    success: false,
                    message: `Platform ${LinkItem.platform} exists more than once.`,
                    link: duplicateLink
                }
            }

        }

        return {
            success: true
        }

    }

    const onSubmit = async () => {

        const isValid = validateLinks();

        if (!isValid.success) return toast.custom(<Success imageSrc='/images/icon-changes-saved.svg' message={isValid.message!} />);
        // Submit

        const res = await addLinksAPI.post(userData.email, links);
        if (res.success) {
            await fetchUserDetails();
            toast.custom(<Success imageSrc='/images/icon-changes-saved.svg' message="Changes saved successfully!" />)
        }
    }

    const canSubmit = false;

    return {
        links,
        addLink,
        removeLink,
        updateLink,
        onSubmit,
        loading
    }

}

export default useManageLinks