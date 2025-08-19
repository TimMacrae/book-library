package com.ecosystem.backend.books;
import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.books.repository.BooksRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksService {
    private final BooksRepo repo;

    public BooksService(BooksRepo repo) {
        this.repo = repo;
    }
    public List<Book> getAllBooks() {
        return repo.findAll();
    }
    public Book getBookById(String id) {
        return repo.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
    }
}
