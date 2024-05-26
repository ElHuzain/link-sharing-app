import useGetUserDetails from '@/api/storage/useGetUserDetails';
import { AuthContext } from '@/providers/authProvider';
import { setUserDetails } from '@/state/dataSlice';
import { useAppDispatch, useAppSelector } from '@/state/store'
import React, { useContext, useEffect, useState } from 'react'

const useSubscribeToUserDetails = () => {
    const [loading, setLoading] = useState(true)
    const [platforms, setPlatforms] = useState(null);

    const fetchPlatforms = async () => {
        setLoading(true);

        const platformsRes = await import('@/platforms.json');
        // @ts-ignore
        setPlatforms(platformsRes.default);

        setLoading(false);
    }

    useEffect(() => {
        if (!platforms) {
            fetchPlatforms();
        } else setLoading(false);
    }, [])

    return {
        loading,
        platforms
    }
}

export default useSubscribeToUserDetails