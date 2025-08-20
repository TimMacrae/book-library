package com.ecosystem.backend.books.repository;

import com.ecosystem.backend.books.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BooksRepo extends MongoRepository<Book,String> {
}
