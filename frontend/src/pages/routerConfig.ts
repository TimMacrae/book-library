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
    HOST5173: string,
    HOST8080: string,
    GITHUB_AUTH: string,
    AUTH_USER: string,
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
        HOST5173:'localhost:5173',
        HOST8080: 'http://localhost:8080',
        GITHUB_AUTH:'/oauth2/authorization/github',
        AUTH_USER:'/api/auth'
    }
}