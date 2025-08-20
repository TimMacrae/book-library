package com.ecosystem.backend.books.dto;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class BookDtoTest {
    @Test
    public void testBookDto() {
        String title = "Title";
        String description = "A test book";
        List<String> authors = List.of("Author One", "Author Two");
        String firstPublishDate = "2020";
        String cover = "cover.png";
        String language = "en";
        String isbn = "1234567890";

        BookDto book = new BookDto(title, description, authors, firstPublishDate, cover, language, isbn);

        assertAll(
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