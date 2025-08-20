export type Book = {
    title: string;
    description: string;
    authors: string[];
    firstPublishDate: string;
    cover: string;
    language: string;
    isbn: string;
};

export type BookForm = Book & {
    authorInput: string;
}