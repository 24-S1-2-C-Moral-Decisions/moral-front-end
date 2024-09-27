
export type Topic = {
    title: string,
    picUrl: string,
    url: string,
    postsNum?: number
}

export type Topics=Topic[]


export type Post = {
    id?: string,
    title: string,
    selftext?: string,
    verdict?: string,
    isExpand?: boolean,
    assholeNumber?: number,
    notAssholeNumber?: number,
}

export type Posts=Post[]