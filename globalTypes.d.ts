// Links

export type link = {
    platform: string
    url: string
}

export type localLink = {
    id: string
    platform: string
    url: string
};

// User
export type user = {
    email: string
    username: string
    imageSrc: string
    description: string
    links: link[]
}