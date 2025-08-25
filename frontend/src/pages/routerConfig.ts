type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
    LIBRARY: string,
    FAVORITES: string,
    BOOKEDIT : string,
    BOOKS: string,
}

type API = {
    BOOKS: string,
    LIBRARY: string
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
        BOOKEDIT:"/book/:id/edit",
        LIBRARY:"/library",
        FAVORITES:"/favorites",
        BOOKS:"/books"
    },
    API:{
        BOOKS:"/api/books",
        LIBRARY:"/api/library"
    }
}