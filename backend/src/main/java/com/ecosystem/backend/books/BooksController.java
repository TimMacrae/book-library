package com.ecosystem.backend.books;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/books")
public class BooksController {

    BooksService booksService;

    BooksController(BooksService booksService) {
        this.booksService = booksService;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBookById(@PathVariable String id) throws Exception {
        booksService.deleteBooksById(id);
    }
}
