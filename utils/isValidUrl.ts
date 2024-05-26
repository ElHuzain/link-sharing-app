import platforms from "@/utils/data/platforms.json"

const isValidUrl: (url: string, platform: string) => boolean = (url: string, platform: string) => {
    console.log(platforms);
    const p = platforms.find(p => p.name.split(" ").join("").toLowerCase() === platform.toLowerCase());
    console.log(p);
    console.log(platform)
    return (/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url) && url.includes(platform))
}

export default isValidUrl