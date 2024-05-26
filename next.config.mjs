/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiKey: "AIzaSyA4Adxzqchs-5n49BXI57bVdYZ63wMkCZc",
        authDomain: "link-sharing-app-4afea.firebaseapp.com",
        projectId: "link-sharing-app-4afea",
        storageBucket: "link-sharing-app-4afea.appspot.com",
        messagingSenderId: "318933539327",
        appId: "1:318933539327:web:359e6deed5d5683e15efca",
        databaseURL: "https://link-sharing-app-4afea-default-rtdb.europe-west1.firebasedatabase.app"
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;