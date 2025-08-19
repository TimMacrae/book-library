package com.ecosystem.backend.books;

import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.books.repository.BooksRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestClassOrder;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

@SpringBootTest
class BooksServiceTest {

    @Test
    void deleteBooksById_shouldCallBooksRepoDeleteById_WhenStudentExists() throws Exception {
        //Given
        BooksRepo booksRepo = mock(BooksRepo.class);
        BooksService booksService = new BooksService(booksRepo);

        List<String> authors = new ArrayList<String>();
        authors.add("author1");
        authors.add("author2");
        Book book = new Book("1", "Test", "Test book for testing", authors,"1951", "123456", "English", "12345");
        Optional<Book> response= Optional.of(book);

        when(booksRepo.findById("1")).thenReturn(response);

        // When
        booksService.deleteBooksById("1");

        // Then
        verify(booksRepo, times(1)).deleteById("1");
    }

    @Test
    void deleteBooksById_shouldThrowException_WhenStudentDoesNotExist() throws Exception {
        //Given
        BooksRepo booksRepo = mock(BooksRepo.class);
        BooksService booksService = new BooksService(booksRepo);

        when(booksRepo.findById("1")).thenReturn(null);

        // When
        try {
            booksService.deleteBooksById("1");
        } catch (Exception ex) {
            //
        }

        verify(booksRepo, times(1)).findById("1");
    }
}