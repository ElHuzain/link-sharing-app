const formatFirebaseResponse: (message: string) => string = (message: string) => {
    return message.replace("auth/", "").split("-").join(" ");
}

export default formatFirebaseResponse;