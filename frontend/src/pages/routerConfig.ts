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
}

type API = {
    BOOKS: string,
    LIBRARY: string
    BOOK_ID: (id:string)=>string,
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
    },
    API:{
        BOOKS:"/api/books",
        LIBRARY:"/api/library",
        BOOK_ID:(id:string)=>`/api/books/${id}`,
    }
}