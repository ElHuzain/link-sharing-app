"use client";
import { Button } from '@/components/ui/button'
import Success from '@/components/ui/customToast';
import { signInWithGogole } from '@/data/firebase-fn'
import React from 'react'
import toast from 'react-hot-toast';

const GogoleSignIn = () => {

    const signIn = async () => {
        const res = await signInWithGogole();

        if (res.success) {
            if (res.action === "create") {
                toast.custom(<Success message="Account created successfully!" />);
            } else if(res.action === "login") {
                toast.custom(<Success message="Login successful" />);
            }
        }
    }

    return (
        <Button onClick={signIn} className="flex items-center gap-2 justify-center w-full bg-[#ea4335]">
            <svg x="0px" y="0px" width="18" height="18" style={{ fill: "white" }} viewBox="0 0 50 50">
                <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
            </svg>
            <span>Sign In with Google</span>
        </Button>
    )
}

export default GogoleSignIn