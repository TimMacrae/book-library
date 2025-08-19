package com.ecosystem.backend.books;

import com.ecosystem.backend.books.repository.BooksRepo;
import org.springframework.stereotype.Service;

@Service
public class BooksService {

    private final BooksRepo booksRepo;

    public BooksService(BooksRepo booksRepo) {
        this.booksRepo = booksRepo;
    }

    public void deleteBooksById(String id) throws Exception {
        booksRepo.findById(id).orElseThrow(() -> new Exception("Book with id " + id + " not found"));
        booksRepo.deleteById(id);
    }
}
