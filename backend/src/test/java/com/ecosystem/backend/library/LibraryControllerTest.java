package com.ecosystem.backend.library;

import com.ecosystem.backend.library.dto.LibraryDocDto;
import com.ecosystem.backend.library.dto.LibraryResponseDto;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.beans.factory.annotation.Autowired;
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

    @MockBean
    private LibraryRestClientService libraryRestClientService;

    @Test
    void getLibrarySearch_shouldReturnTransformedResult() throws Exception {
        LibraryDocDto doc = new LibraryDocDto(
                123,
                false,
                4,
                "Die Vita des Josef Busn&#257;y&#257;",
                List.of("Ralph Barczok"),
                2021,
                "/works/OL25319939W",
                List.of("asdf"),
                List.of("OL8280123A"),
                false
        );
        LibraryResponseDto responseDto = new LibraryResponseDto(0,1,List.of(doc));

        Mockito.when(libraryRestClientService.searchLibrary(anyString(), anyString()))
                .thenReturn(responseDto);

        mockMvc.perform(get("/api/library")
                        .param("title", "Easy Testing")
                        .param("author", "author1")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].key", is("/works/OL25319939W")))
                .andExpect(jsonPath("$[0].title", is("Die Vita des Josef Busn&#257;y&#257;")))
                .andExpect(jsonPath("$[0].author_name[0]", is("Ralph Barczok")))
                .andExpect(jsonPath("$[0].first_publish_year", is(2021)));
    }
}