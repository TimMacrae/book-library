package com.ecosystem.backend.books;

import com.ecosystem.backend.books.dto.BookDto;
import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.exception.BookCouldNotBeCreated;
import com.ecosystem.backend.exception.BookWasNotFound;
import com.ecosystem.backend.exception.ExceptionMessage;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BooksController {
   private final BooksService booksService;

    @GetMapping
    public List<Book> getAllBooks() {
        return booksService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable String id) {
        return booksService.getBookById(id);
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@Valid @RequestBody BookDto bookDto) {
        Book book = booksService.addBook(bookDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(book);
    }

    @PutMapping
    public ResponseEntity<Book> updateBook(@Valid @RequestBody Book bookData) {
        Book book = booksService.updateBook(bookData);
        return ResponseEntity.status(HttpStatus.OK).body(book);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBookById(@PathVariable String id) throws BookWasNotFound {
        booksService.deleteBooksById(id);
    }

    @ExceptionHandler(BookCouldNotBeCreated.class)
    public ResponseEntity<ExceptionMessage> handleBookCouldNotBeCreated(Exception exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                new ExceptionMessage(exception.getMessage())
        );
    }

    @ExceptionHandler(BookWasNotFound.class)
    public ResponseEntity<ExceptionMessage> handleBookWasNotFound(BookWasNotFound exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ExceptionMessage(exception.getMessage())
        );
    }
}