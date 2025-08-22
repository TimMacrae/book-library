package com.ecosystem.backend.books;

import com.ecosystem.backend.books.models.Book;
import com.ecosystem.backend.books.repository.BooksRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class BooksControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BooksRepo booksRepo;

    @Autowired
    private BooksService booksService;

    @Test
    void createBook_ShouldReturnCreatedBook() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/books").contentType(MediaType.APPLICATION_JSON).content(
                        """
                                {
                                "title":"title",
                                "description": "description",
                                "authors":["authors"],
                                "firstPublishDate": "2020",
                                "cover":"cover.png",
                                "language":"en",
                                "isbn": "123456789"
                                }
                                """
                ))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                {
                                "title":"title",
                                "description": "description",
                                "authors":["authors"],
                                "firstPublishDate": "2020",
                                "cover":"cover.png",
                                "language":"en",
                                "isbn": "123456789"
                                }
                                """
                ))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").isNotEmpty());
    }

    @Test
    void createBook_ShouldThrowAnException() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/books").contentType(MediaType.APPLICATION_JSON).content(
                        """
                                {
                                "authors":["authors"],
                                "firstPublishDate": "2020",
                                "cover":"cover.png",
                                "language":"en",
                                "isbn": "123456789"
                                }
                                """
                ))
                .andExpect(MockMvcResultMatchers.status().is(HttpStatus.BAD_REQUEST.value()));
    }

    @Test
    void deleteBookById_shouldReturnVoid_whenCalled() throws Exception {
        Book book = new Book(
                "1",
                "title",
                "description",
                List.of("author1", "author2"),
                "2020",
                "cover.png",
                "en",
                "123456789"
        );
        Book newBook = booksRepo.save(book);

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/books/"+newBook.id()))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }

    @Test
    void deleteBookById_shouldReturn404_whenBookDoesntExist() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/books/1"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    void updateBook_ShouldReturnCreatedBook() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.put("/api/books").contentType(MediaType.APPLICATION_JSON).content(
                        """
                                {
                                "id": "123",
                                "title":"title",
                                "description": "description",
                                "authors":["authors"],
                                "firstPublishDate": "2020",
                                "cover":"cover.png",
                                "language":"en",
                                "isbn": "123456789"
                                }
                                """
                ))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                {
                                
                                "title":"title",
                                "description": "description",
                                "authors":["authors"],
                                "firstPublishDate": "2020",
                                "cover":"cover.png",
                                "language":"en",
                                "isbn": "123456789"
                                }
                                """
                ))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").isNotEmpty());
    }

    @Test
    @DirtiesContext
    void getAllBooks() throws Exception {
        // GIVEN
        booksRepo.deleteAll();
        Book b1 = new Book("1", "Book 1", "Description 1", List.of("Author 1"), "2020", "cover1.jpg", "EN", "1234567890");
        Book b2 = new Book("2", "Book 2", "Description 2", List.of("Author 2"), "2021", "cover2.jpg", "EN", "0987654321");
        booksRepo.saveAll(List.of(b1, b2));

        // WHEN & THEN
        mockMvc.perform(get("/api/books"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                    [
                      {
                        "id": "1",
                        "title": "Book 1",
                        "description": "Description 1",
                        "authors": ["Author 1"],
                        "firstPublishDate": "2020",
                        "cover": "cover1.jpg",
                        "language": "EN",
                        "isbn": "1234567890"
                      },
                      {
                       "id": "2",
                       "title": "Book 2",
                       "description": "Description 2",
                       "authors": ["Author 2"],
                       "firstPublishDate": "2021",
                       "cover": "cover2.jpg",
                       "language": "EN",
                       "isbn": "0987654321"
                     }
                    ]
                    """));
    }

    @Test
    @DirtiesContext
    void getBookById() throws Exception {
        // GIVEN
        Book book = new Book("1", "Book 1", "Description 1", List.of("Author 1"), "2020", "cover1.jpg", "EN", "1234567890");
        booksRepo.save(book);

        // WHEN & THEN
        mockMvc.perform(get("/api/books/1"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                    
                        {
                          "id": "1",
                          "title": "Book 1",
                          "description": "Description 1",
                          "authors": ["Author 1"],
                          "firstPublishDate": "2020",
                          "cover": "cover1.jpg",
                          "language": "EN",
                          "isbn": "1234567890"
                         }
                    """));
    }
}