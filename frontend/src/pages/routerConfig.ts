type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
    LIBRARY: string,
    FAVORITES: string,
    BOOKEDIT : string,
}

type API = {
    BOOKS: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
        BOOKEDIT:"/book/:id/edit",
        LIBRARY:"/library",
        FAVORITES:"/favorites",
    },
    API:{
        BOOKS:"/api/books",
    }
}