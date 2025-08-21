package com.ecosystem.backend.books;

import com.ecosystem.backend.books.dto.BookDto;
import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.books.repository.BooksRepo;
import com.ecosystem.backend.exception.BookCouldNotBeCreated;
import com.ecosystem.backend.exception.BookWasNotFound;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    @Test
    void deleteBooksById_shouldCallBooksRepoDeleteById_WhenStudentExists() throws Exception {
        //Given
        booksRepo = mock(BooksRepo.class);
        booksService = new BooksService(booksRepo);

        List<String> authors = new ArrayList<String>();
        authors.add("author1");
        authors.add("author2");
        book = new Book("1", "Test", "Test book for testing", authors,"1951", "123456", "English", "12345");
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
        booksRepo = mock(BooksRepo.class);
        booksService = new BooksService(booksRepo);

        when(booksRepo.findById("1")).thenReturn(null);

        // When
        try {
            booksService.deleteBooksById("1");
        } catch (Exception ex) {
            //
        }

        verify(booksRepo, times(1)).findById("1");
    }

    @Test
    void getAllBooks_Test() {
        // GIVEN
        Book b1 = new Book("1", "Book 1", "Description 1", List.of("Author 1"), "2020",
                "cover1.jpg", "EN", "1234567890");
        Book b2 = new Book("2", "Book 2", "Description 2", List.of("Author 2"), "2021",
                "cover2.jpg", "EN", "0987654321");
        List<Book> books = List.of(b1, b2);
        when(booksRepo.findAll()).thenReturn(books);

        // WHEN
        List<Book> actual = booksService.getAllBooks();

        // THEN
        verify(booksRepo).findAll();
        assertEquals(books, actual);
    }

    @Test
    void getBookById_Test_whenValidId_ThenReturnBook() {
        // GIVEN
        String id = "1";
        book = new Book("1", "Book 1", "Description 1", List.of("Author 1"),
                "2020", "cover1.jpg", "EN", "1234567890");
        when(booksRepo.findById(id)).thenReturn(Optional.of(book));

        // WHEN
        Book actual = booksService.getBookById(id);

        // THEN
        verify(booksRepo).findById(id);
        assertEquals(book, actual);
    }

    @Test
    void getBookById_Test_whenInvalidId_ThenThrowException() {
        // GIVEN
        String id = "99";
        when(booksRepo.findById(id)).thenReturn(Optional.empty());

        // WHEN & THEN
        assertThrows(BookWasNotFound.class, () -> booksService.getBookById(id));
        verify(booksRepo).findById(id);
    }
}