
export type Topic = {
    title: string,
    picUrl: string,
    url: string,
    postsNum?: number
}

export type Topics=Topic[]

export type Post = {
    id: string,
    title: string,
    selftext: string,
}

export type Posts=Post[]