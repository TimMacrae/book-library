type RouterConfig = {
    URL:URL
    API:API
}

type URL = {
    HOME: string,
    LIBRARY: string,
    FAVORITES: string,
    BOOK_EDIT_ID : (id:string)=>string,
    BOOKEDIT:string,
    BOOKS: string,
    BOOK_ID: (id:string)=>string,
    LOGIN: string,
}

type API = {
    BOOKS: string,
    BOOK_ID: (id:string)=>string,
    HOST5173: string,
    HOST8080: string,
    GITHUB_AUTH: string,
    AUTH_USER: string,
}

export const routerConfig:RouterConfig = {
    URL:{
        HOME:"/",
        BOOK_EDIT_ID:(id)=> `/book/${id}/edit`,
        BOOKEDIT:"/book/:id/edit",
        LIBRARY:"/library",
        FAVORITES:"/favorites",
        BOOKS:"/books",
        BOOK_ID:(id:string)=>`/books/${id}`,
        LOGIN:"/login",
    },
    API:{
        BOOKS:"/api/books",
        BOOK_ID:(id:string)=>`/api/books/${id}`,
        HOST5173:'localhost:5173',
        HOST8080: 'http://localhost:8080',
        GITHUB_AUTH:'/oauth2/authorization/github',
        AUTH_USER:'/api/auth'
    }
}