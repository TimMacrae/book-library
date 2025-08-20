type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
    BOOKEDIT : string,
}

type API = {
    BOOKS: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
        BOOKEDIT:"/book-edit",
    },
    API:{
        BOOKS:"/api/books",
    }
}