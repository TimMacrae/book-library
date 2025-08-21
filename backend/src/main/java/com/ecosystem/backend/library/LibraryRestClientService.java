package com.ecosystem.backend.library;

import com.ecosystem.backend.exception.LibraryRestClientFailedException;
import com.ecosystem.backend.library.dto.LibraryResponseDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class LibraryRestClientService {

    private final RestClient restClient;

    public LibraryRestClientService(RestClient.Builder restClientBuilder,
                                    @Value("${openlibrary.api.baseurl}") String baseUrl) {
        this.restClient = restClientBuilder.baseUrl(baseUrl).build();
    }

    public LibraryResponseDto searchLibrary (String searchQuery) {
        try {
            return  restClient.post().uri(searchQuery).retrieve().body(LibraryResponseDto.class);
        }catch (Exception exception) {
            throw new LibraryRestClientFailedException(exception.getMessage()) ;
        }
    }

}
