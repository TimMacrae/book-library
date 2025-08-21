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

}