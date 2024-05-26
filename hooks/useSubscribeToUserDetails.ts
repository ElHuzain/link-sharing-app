import useGetUserDetails from '@/api/storage/useGetUserDetails';
import { AuthContext } from '@/providers/authProvider';
import { setUserDetails } from '@/state/dataSlice';
import { useAppDispatch, useAppSelector } from '@/state/store'
import React, { useContext, useEffect, useState } from 'react'

const useSubscribeToUserDetails = () => {
    const [loading, setLoading] = useState(true)

    const userData = useAppSelector(val => val.data.user);
    const dispatch = useAppDispatch();

    const { user, isLoggedIn } = useContext(AuthContext)

    const getUserDetails = useGetUserDetails();

    const fetchUserDetails = async () => {
        setLoading(true);

        const res = await getUserDetails.get(user!.email!);
        if (res.success) {
            //@ts-ignore
            dispatch(setUserDetails(res.data));
        }

        setLoading(false);
    }

    useEffect(() => {
        if (userData.email === "" && isLoggedIn) {
            fetchUserDetails();
        } else setLoading(false);
    }, [isLoggedIn])

    return {
        userData,
        fetchUserDetails,
        loading
    }
}

export default useSubscribeToUserDetails