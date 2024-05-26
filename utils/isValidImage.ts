export const isValidImage: (file: any) => { success: boolean, message?: string } = (file) => {
    
    if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
        return {
            success: false,
            message: "IMAGE_EXTENSION_ERR"
        }
    }

    return {
        success: true
    }

}