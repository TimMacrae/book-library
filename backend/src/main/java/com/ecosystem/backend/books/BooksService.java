package com.ecosystem.backend.books;

import com.ecosystem.backend.books.dto.BookDto;
import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.books.repository.BooksRepo;
import com.ecosystem.backend.exception.BookCouldNotBeCreated;
import com.ecosystem.backend.exception.BookCouldNotBeDeleted;
import com.ecosystem.backend.exception.BookWasNotFound;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import static com.ecosystem.backend.utility.IdService.generateId;

@Service
@AllArgsConstructor
public class BooksService {

    private final BooksRepo booksRepo;

    public Book addBook(BookDto bookDto) {
        try {
            Book book = new Book(
                    generateId(),
                    bookDto.title(),
                    bookDto.description(),
                    bookDto.authors(),
                    bookDto.firstPublishDate(),
                    bookDto.cover(),
                    bookDto.language(),
                    bookDto.isbn()
            );

            return booksRepo.save(book);

        } catch (Exception exception) {
            throw new BookCouldNotBeCreated();
        }
    }

    public void deleteBooksById(String id) throws BookWasNotFound {
        booksRepo.findById(id).orElseThrow(() -> new BookWasNotFound(id));
        booksRepo.deleteById(id);
    }

    public Book updateBook(Book bookData) {
        //find book in db
        try {
            booksRepo.deleteById(bookData.id());
            try {
                Book book = new Book(
                        generateId(),
                        bookData.title(),
                        bookData.description(),
                        bookData.authors(),
                        bookData.firstPublishDate(),
                        bookData.cover(),
                        bookData.language(),
                        bookData.isbn()
                );

                return booksRepo.save(book);

            } catch (Exception exception) {
                throw new BookCouldNotBeCreated();
            }
        } catch (Exception exception) {
            throw new BookCouldNotBeDeleted();
        }
    }
}
