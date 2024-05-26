"use client"
import React, { useEffect, useState } from 'react'
import ProfileDetailsPreview from '../home/components/illustration/profileDetailsPreview'
import LinkList from '@/components/ui/linkList'
import { usePathname } from 'next/navigation'
import useGetUserDetailsByUsername from '@/api/storage/useGetUserDetailsByUsername'
import RelativeLoadingComponent from '@/components/ui/relativeLoadingComponent'
import Image from 'next/image'
import LoadingComponent from '@/components/ui/loadingComponent'
import { cn } from '@/lib/utils'

const PreviewPage = () => {
    const [userData, setUserData] = useState(null);

    const usernameFromUrl = usePathname().split("/")[2];
    const { get, loading } = useGetUserDetailsByUsername();

    const fetchUser = async () => {
        const res = await get(usernameFromUrl);
        if (res.success) {
            // @ts-ignore
            setUserData(res.data);
        }
    }

    useEffect(() => {
        if (!userData) {
            fetchUser()
        }
    }, []);

    return (
        <section className="fixed top-0 left-0 h-dvh w-full flex items-center justify-center bg-white md:bg-transparent">
            <div aria-hidden="true" className="bg-white md:bg-purple z-[-1] h-[40%] bg-purple w-full absolute top-0 rounded-b-[32px]"></div>
            <div className={cn("py-8 w-full max-w-[237px] md:max-w-[349px] md:p-10 rounded-[24px] flex flex-col gap-10", !loading && "md:shadow-default bg-white")}>
                {
                    loading ? <LoadingComponent />
                        : userData === null ? <div className="flex flex-col justify-center items-center gap-2">
                            <Image width="182" height="40" alt="logo" className="absolute md:relative md:top-0 md:left-0 md:mb-10 top-8 left-6" src="/images/informative/undraw-not-found.svg" />
                            <p className="w-full text-center">{`We couldn't find this user :(`}</p>
                        </div>
                            : <>
                                <ProfileDetailsPreview size="null" data={userData} />
                                {/* @ts-ignore */}
                                <LinkList size="null" data={userData?.links} />
                            </>
                }

            </div>
        </section>
    )
}

export default PreviewPage