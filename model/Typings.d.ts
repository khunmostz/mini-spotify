export interface CategoryModel {
    name: string; color: string; image: any;
}

export type listProps = {
    id:string
    track: string,
    album: string,
    datetime: string,
    image: string,
    time:string,
}

export type SpotifyProps = {
    id: number,
    title: string,
    little: string,
    categories: string,
    image: string,
    list: listProps[],
}
