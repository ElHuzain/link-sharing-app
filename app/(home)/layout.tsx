import PreviewHeader from "@/components/common/previewHeader";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <PreviewHeader />
            <main>{children}</main>
        </>
    );
}