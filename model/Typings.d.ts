export interface CategoryModel {
    name: string; color: string; image: any;
}

type listProps = {
    listTitle: string,
    listDesc: string
}

export type SpotifyProps = {
    id: number,
    title: string,
    categories: string,
    list: listProps[],
}
