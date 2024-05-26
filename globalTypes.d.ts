// Links

type link = {
    platform: string
    url: string
}

type localLink = {
    id: string
    platform: string
    url: string
};

// User
type user = {
    email: string
    username: string
    imageSrc: string
    description: string
    links: link[]
}