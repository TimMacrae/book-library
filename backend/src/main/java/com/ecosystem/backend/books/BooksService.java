package com.ecosystem.backend.books;

import com.ecosystem.backend.books.dto.BookDto;
import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.books.repository.BooksRepo;
import com.ecosystem.backend.exception.BookCouldNotBeCreated;
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

    public void deleteBooksById(String id) throws Exception {
        booksRepo.findById(id).orElseThrow(() -> new Exception("Book with id " + id + " not found"));
        booksRepo.deleteById(id);
    }
}
