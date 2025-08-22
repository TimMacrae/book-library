package com.ecosystem.backend.library;

import com.ecosystem.backend.exception.LibraryRestClientFailedException;
import com.ecosystem.backend.library.dto.LibraryDocDto;
import com.ecosystem.backend.library.dto.LibraryResponseDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Answers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestClient;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class LibraryRestClientServiceTest {

    @Mock(answer = Answers.RETURNS_DEEP_STUBS)
    RestClient.Builder restClientBuilder;

    @Mock(answer = Answers.RETURNS_DEEP_STUBS)
    RestClient restClient;

    private LibraryRestClientService libraryRestClientService;

    @BeforeEach
    void setUp() {
        when(restClientBuilder.baseUrl(anyString()).build()).thenReturn(restClient);
        libraryRestClientService = new LibraryRestClientService(restClientBuilder, "http://fake-url");
    }

    @Test
    void searchLibrary_shouldUseGET_andReturnResponse() {
        var doc = new LibraryDocDto(1, true, 2, "test", List.of("Tim"), 2002,
                "123456", List.of("asdqwe"), List.of("id"), true);
        var expected = new LibraryResponseDto(1, 1, List.of(doc));

        when(restClient
                .get()
                .uri(anyString())
                .retrieve()
                .body(LibraryResponseDto.class))
                .thenReturn(expected);

        var result = libraryRestClientService.searchLibrary("/search.json?q=foo");

        assertThat(result).isEqualTo(expected);
    }

    @Test
    void testCheckTodoSpelling_failure_throwsException() {
        when(restClient.get()).thenThrow(new RuntimeException("API error"));

        LibraryRestClientFailedException ex = assertThrows(
                LibraryRestClientFailedException.class,
                () -> libraryRestClientService.searchLibrary("/search.json?q=foo")
        );

        assertTrue(ex.getMessage().contains("LibraryClientFailed: API error"));
    }
}