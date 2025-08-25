package com.ecosystem.backend.library;

import com.ecosystem.backend.exception.LibraryRestClientFailedException;
import com.ecosystem.backend.library.dto.LibraryResponseDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class LibraryRestClientService {

    private final RestClient restClient;

    public LibraryRestClientService(RestClient.Builder restClientBuilder,
                                    @Value("${openlibrary.api.baseurl}") String baseUrl) {
        this.restClient = restClientBuilder.baseUrl(baseUrl).build();

    }

    public LibraryResponseDto searchLibrary (String title, String author) {;
        String uri = UriComponentsBuilder.fromPath("/search.json")
                .queryParam("title", title)
                .queryParam("author", author)
                .build()
                .toUriString();
        System.out.println("searchLibrary: Uri:" + uri);
        try {
            return  restClient.get().uri(uri).retrieve().body(LibraryResponseDto.class);
        }catch (Exception exception) {
            throw new LibraryRestClientFailedException(exception.getMessage()) ;
        }
    }
}
