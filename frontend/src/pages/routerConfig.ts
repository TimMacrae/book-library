type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
    LIBRARY: string,
    FAVORITES: string,
    BOOKS: string,
}

type API = {
    BOOKS: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
        LIBRARY:"/library",
        FAVORITES:"/favorites",
        BOOKS:"/books"
    },
    API:{
        BOOKS:"/api/books",
    }
}