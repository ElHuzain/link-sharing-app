import { auth } from '@/data/firebase-init'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const useVerifyAuth = ({ protectedRoute, protectionType }: { protectedRoute: boolean, protectionType: string }) => {
    const [loading, setLoading] = useState(true)

    const Router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {

                // If it is a non-user route
                if (protectedRoute && protectionType === "no-user") {
                    return Router.push("/home");
                }

                setLoading(false);
            }
            else {

                // If it is a user-required route
                if (protectedRoute && protectionType === "user") {
                    return Router.push("/signin")
                }

                setLoading(false);
            }
        })

    }, [])

    return { loading }
}

export default useVerifyAuth