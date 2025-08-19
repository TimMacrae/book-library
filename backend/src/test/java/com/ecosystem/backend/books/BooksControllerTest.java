package com.ecosystem.backend.books;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
class BooksControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BooksService bookService;

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