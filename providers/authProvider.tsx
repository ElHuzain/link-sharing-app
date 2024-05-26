"use client";
import { auth } from '@/data/firebase-init';
import { store } from '@/state/store';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { Provider } from 'react-redux';

export const AuthContext = createContext<{ isLoggedIn: boolean; user: null | User; loading: boolean | null; }>({
    isLoggedIn: false,
    user: null,
    loading: null
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
            }
            else {
                setIsLoggedIn(false);
                setUser(null);
            }
            setLoading(false);
        });

    }, []);

    const value = {
        isLoggedIn,
        user,
        loading
    }

    return <AuthContext.Provider value={value}><Provider store={store}>{children}</Provider></AuthContext.Provider >
}

export default AuthProvider