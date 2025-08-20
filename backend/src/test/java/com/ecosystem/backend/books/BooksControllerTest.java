package com.ecosystem.backend.books;

import com.ecosystem.backend.books.repository.BooksRepo;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;

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

    //    @Test
//    void deleteBookById_shouldReturnVoid_whenCalled() throws Exception {
//        mockMvc.perform(MockMvcRequestBuilders.delete("/books/1"))
//                .andExpect(MockMvcResultMatchers.status().isOk());
//    }

    @Test
    void deleteBookById_shouldReturn404_whenBookDoesntExist() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/books/1"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

}