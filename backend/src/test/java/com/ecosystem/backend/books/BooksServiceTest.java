package com.ecosystem.backend.books;

import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.books.repository.BooksRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class BooksServiceTest {

    private final BooksRepo repo = mock(BooksRepo.class);
    private final BooksService service = new BooksService(repo);

    @Test
    void getAllBooks_Test() {
        // GIVEN
        Book b1 = new Book("1", "Book 1", "Description 1", List.of("Author 1"), "2020",
                "cover1.jpg", "EN", "1234567890");
        Book b2 = new Book("2", "Book 2", "Description 2", List.of("Author 2"), "2021",
                "cover2.jpg", "EN", "0987654321");
        List<Book> books = List.of(b1, b2);
        when(repo.findAll()).thenReturn(books);

        // WHEN
        List<Book> actual = service.getAllBooks();

        // THEN
        verify(repo).findAll();
        assertEquals(books, actual);
    }

    @Test
    void getBookById_Test_whenValidId_ThenReturnBook() {
        // GIVEN
        String id = "1";
        Book book = new Book("1", "Book 1", "Description 1", List.of("Author 1"),
                "2020", "cover1.jpg", "EN", "1234567890");
        when(repo.findById(id)).thenReturn(Optional.of(book));

        // WHEN
        Book actual = service.getBookById(id);

        // THEN
        verify(repo).findById(id);
        assertEquals(book, actual);
    }

    @Test
    void getBookById_Test_whenInvalidId_ThenThrowException() {
        // GIVEN
        String id = "99";
        when(repo.findById(id)).thenReturn(Optional.empty());

        // WHEN & THEN
        assertThrows(BookNotFoundException.class, () -> service.getBookById(id));
        verify(repo).findById(id);
    }
}
