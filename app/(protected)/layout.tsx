"use client";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import LoadingComponent from "@/components/ui/loadingComponent";
import useVerifyAuth from "@/hooks/useVerifyAuth";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { loading } = useVerifyAuth({ protectedRoute: true, protectionType: "user" });

    if (loading) return <LoadingComponent />

    return (
        <div className="min-h-dvh">
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
}