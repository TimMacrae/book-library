package com.ecosystem.backend.repository;

import com.ecosystem.backend.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Repo extends MongoRepository<Book,String> {
}
