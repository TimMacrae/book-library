package com.ecosystem.backend.models;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class BookTest {

    @Test
    void testConstructorAllProperties() {
        // Arrange
        String id = "1";
        String title = "Title";
        String description = "A test book";
        List<String> authors = List.of("Author One", "Author Two");
        String firstPublishDate = "2020";
        String cover = "cover.png";
        String language = "en";
        String isbn = "1234567890";

        // Act
        Book book = new Book(id, title, description, authors, firstPublishDate, cover, language, isbn);

        // Assert
        assertAll(
                () -> assertEquals(id, book.id()),
                () -> assertEquals(title, book.title()),
                () -> assertEquals(description, book.description()),
                () -> assertEquals(authors, book.authors()),
                () -> assertEquals(firstPublishDate, book.firstPublishDate()),
                () -> assertEquals(cover, book.cover()),
                () -> assertEquals(language, book.language()),
                () -> assertEquals(isbn, book.isbn())
        );
    }
}
