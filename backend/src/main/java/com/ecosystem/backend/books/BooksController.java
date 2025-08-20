package com.ecosystem.backend.books;

import com.ecosystem.backend.books.dto.BookDto;
import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.exception.BookCouldNotBeCreated;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BooksController {
   private final BooksService booksService;

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

    @ExceptionHandler(BookCouldNotBeCreated.class)
    public ResponseEntity<?> handleBookCouldNotBeCreated(Exception exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                exception.getMessage()
        );

    }
}
