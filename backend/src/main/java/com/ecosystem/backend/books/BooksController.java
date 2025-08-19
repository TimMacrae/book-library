package com.ecosystem.backend.books;

import com.ecosystem.backend.books.models.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BooksController {

    private final BooksService service;

    public BooksController(BooksService service) {
        this.service = service;
    }
    @GetMapping
    public List<Book> getAllBooks() {
        return service .getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable String id) {
        return service.getBookById(id);
    }
}
