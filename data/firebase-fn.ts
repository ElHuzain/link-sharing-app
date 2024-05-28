import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, storage } from "./firebase-init";
import { database } from "./firebase-init"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, limit, query, setDoc, updateDoc, where } from "firebase/firestore";
import { link } from "@/globalTypes";
import { GoogleAuthProvider } from "firebase/auth";

// -- Auth
export const createAccount = async (email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        return {
            success: true,
            data: res
        }
    } catch (err: any) {
        console.log("DB Layer", err.code);
        return {
            success: false,
            message: err.code
        }
    }
}

export const login = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return {
            success: true,
        }
    } catch (err: any) {
        console.log("DB Layer", err.code);
        return {
            success: false,
            message: err.code
        }
    }
}

export const logout = async () => {
    try {
        await signOut(auth);
        return {
            success: true,
        }
    } catch (err: any) {
        console.log("DB Layer", err.code);
        return {
            success: false,
            message: err.code
        }
    }
}

export const doesThisEmailExist = async (email: string) => {

    const docRef = doc(database, "users", email);
    const docSnap = await getDoc(docRef);

    return docSnap.exists();

}

export const signInWithGogole = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        if (!await doesThisEmailExist(res.user.email!)) {
            await createUserDetails(res.user.email!);
            return {
                success: true,
                action: "create"
            }
        }
        return {
            success: true,
            action: "login"
        }
    } catch (err: any) {
        console.log("DB Layer", err.code);
        return {
            success: false,
            message: err.code
        }
    }
}

// -- Storage

export const createUserDetails = async (email: string) => {
    try {
        const data = {
            username: "",
            description: "",
            imageSrc: "",
            email: email,
            links: []
        }

        await setDoc(doc(database, "users", email), data);

        return {
            success: true,
        }
    } catch (err: any) {
        console.log("DB Layer", err);
        return {
            success: false,
            message: err.code
        }
    }
}

export async function uploadProfileImage(email: string, image: Uint8Array | File, returnUrl?: boolean) {
    try {
        const ImageRef = ref(storage, 'profiles/' + email);
        await uploadBytes(ImageRef, image);

        const data = returnUrl ? await getDownloadURL(ImageRef) : null

        return {
            success: true,
            message: "FILE_UPLOADED_SUCCESSFULLY",
            data
        }

    } catch (err: any) {
        console.log("DB Layer", err.code);
        return {
            success: false,
            message: err.code
        }
    }
}

export async function getProfileImageUrl(email: string) {
    try {
        const ImageRef = ref(storage, 'profiles/' + email);
        const url = await getDownloadURL(ImageRef);

        return {
            success: true,
            data: url
        };
    } catch (err: any) {
        console.log("DB Layer", err);
        return {
            success: false,
            message: err.code
        }
    }
}

export const addLink = async (email: string, platform: string, url: string) => {
    try {

        const docRef = doc(database, "users", email);

        await updateDoc(docRef, {
            links: arrayUnion({ platform, url })
        });

        return {
            success: true,
            message: "LINK_ADDED_SUCCESSFULLY"
        }
    } catch (err: any) {
        console.log("DB Layer", err);
        return {
            success: false,
            message: err.code
        }
    }
}

export const addLinks = async (email: string, links: link[]) => {
    try {

        const docRef = doc(database, "users", email);

        await updateDoc(docRef, {
            links: links
        });

        return {
            success: true,
            message: "LINKS_ADDED_SUCCESSFULLY"
        }
    } catch (err: any) {
        console.log("DB Layer", err);
        return {
            success: false,
            message: err.code
        }
    }
}

export const removeLink = async (email: string, linkObject: { platform: string, url: string }) => {
    try {

        const docRef = doc(database, "users", email);
        const res = await updateDoc(docRef, {
            links: arrayRemove(linkObject)
        });

        console.log(res);

        return {
            success: true,
            message: "LINK_ADDED_SUCCESSFULLY"
        }
    } catch (err: any) {
        console.log("DB Layer", err);
        return {
            success: false,
            message: err.code
        }
    }
}

export const getUserDetails = async (email: string) => {
    const docRef = doc(database, "users", email);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        console.log("DB Layer: DOCUMENT DOESNT EXIST");
        return {
            success: false,
            message: "DOCUMENT_DOESNT_EXIST"
        }
    }

    return {
        success: true,
        data: docSnap.data()
    }
}

export const getUserDetailsByUsername = async (username: string) => {
    const docRef = collection(database, "users");
    const q = query(docRef, where("username", "==", username), limit(1));

    let returnData = null;

    const docSnaps = await getDocs(q);
    docSnaps.forEach(snap => {
        returnData = snap.data();
    })

    if (!returnData) {
        console.log("DB Layer: DOCUMENT DOESNT EXIST");
        return {
            success: false,
            message: "DOCUMENT_DOESNT_EXIST"
        }
    }

    return {
        success: true,
        data: returnData
    }
}

export const setUserDetails = async (email: string, data: { username?: string, description?: string, imageSrc?: string }) => {
    try {

        const docRef = doc(database, "users", email);
        await updateDoc(docRef, data);

        return {
            success: true
        }

    } catch (err: any) {
        console.log("DB Layer", err);
        return {
            success: false,
            message: err.code
        }
    }
}