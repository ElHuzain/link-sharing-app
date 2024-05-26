export const isSecure = (url: string) => {
    return url.startsWith("https://")
}

export const removeSecure = (url: string) => {
    if(!isSecure(url)) return url
    else return url.replace("https://", "").replace("http://", "")
}

export const addSecure = (url: string) => {
    if(isSecure(url)) return url;
    else return `https://${url}`;
}