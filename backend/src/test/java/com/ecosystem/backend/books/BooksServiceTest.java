package com.ecosystem.backend.books;

import com.ecosystem.backend.books.dto.BookDto;
import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.books.repository.BooksRepo;
import com.ecosystem.backend.exception.BookCouldNotBeCreated;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static com.ecosystem.backend.utility.IdService.generateId;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class BooksServiceTest {
    @Mock
    private BooksRepo booksRepo;

    @InjectMocks
    private BooksService booksService;

    private BookDto bookDto;
    private Book book;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        bookDto = new BookDto(
                "title",
                "description",
                List.of("author1", "author2"),
                "2020",
                "cover.png",
                "en",
                "123456789"
        );

        var id = generateId();
        book = new Book(
                id,
                bookDto.title(),
                bookDto.description(),
                bookDto.authors(),
                bookDto.firstPublishDate(),
                bookDto.cover(),
                bookDto.language(),
                bookDto.isbn()
        );
    }

    @Test
    void addBook_ShouldCreateABook_AndSaveItToTheRepository() {
        when(booksRepo.save(any(Book.class))).thenReturn(book);
        Book newBook = booksService.addBook(bookDto);
        assertEquals(newBook, book);
        verify(booksRepo, times(1)).save(any(Book.class));
    }

    @Test
    void addBook_ShouldThrowException_WhenSomethingWentWrong() {
        when(booksRepo.save(any(Book.class))).thenThrow(RuntimeException.class);
        assertThrows(BookCouldNotBeCreated.class, () -> booksService.addBook(bookDto));
        verify(booksRepo, times(1)).save(any(Book.class));
    }

}