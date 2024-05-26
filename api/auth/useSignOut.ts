import { logout } from "@/data/firebase-fn";

const useSignOut = () => {

    const signout = async () => {

        try {
            const res = await logout();
            return res;
        } catch (err: any) {
            console.log("API Layer", err.code);
            return {
                success: false,
                message: err.code
            }
        }

    }

    return {
        signout,
    }
}

export default useSignOut