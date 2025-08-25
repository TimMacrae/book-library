package com.ecosystem.backend.library;

import com.ecosystem.backend.library.dto.LibraryDocDto;
import com.ecosystem.backend.library.dto.LibraryResponseDto;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;

import java.util.List;

import static org.mockito.ArgumentMatchers.anyString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@WebMvcTest(LibraryController.class)
class LibraryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private LibraryRestClientService libraryRestClientService;

    @Test
    void getLibrarySearch_shouldReturnTransformedResult() throws Exception {
        LibraryDocDto doc = new LibraryDocDto(
                List.of("Charlotte Brontë"),
        1800,
                "/works/OL1095397W",
        "Shirley"
        );
        LibraryResponseDto responseDto = new LibraryResponseDto(
                List.of(doc));

        Mockito.when(libraryRestClientService.searchLibrary(anyString()))
                .thenReturn(responseDto);

        mockMvc.perform(get("/api/library")
                        .param("title", "Shirley")
                        .param("author", "̈Brontë")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].key", is("/works/OL1095397W")))
                .andExpect(jsonPath("$[0].title", is("Shirley")))
                .andExpect(jsonPath("$[0].author_name[0]", is("Charlotte Brontë")))
                .andExpect(jsonPath("$[0].first_publish_year", is(1800)));
    }
}