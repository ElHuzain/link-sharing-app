const isValidUrl: (url: string, platform: string) => boolean = (url: string, platform: string) => {
    return (/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url) && platform === "dev")
}

export default isValidUrl