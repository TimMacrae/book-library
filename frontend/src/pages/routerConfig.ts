type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
}

type API = {
    BOOKS: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
    },
    API:{
        BOOKS:"/api/books",
    }
}