type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
    BOOKS: string,
}

type API = {
    BOOKS: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
        BOOKS:"/books"
    },
    API:{
        BOOKS:"/api/books",
    }
}