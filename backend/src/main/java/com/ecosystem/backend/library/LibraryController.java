package com.ecosystem.backend.library;


import com.ecosystem.backend.library.dto.LibraryDocShort;
import com.ecosystem.backend.library.dto.LibraryResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/library")
@AllArgsConstructor
public class LibraryController {
    private final LibraryRestClientService libraryRestClientService;

    List<LibraryDocShort> transformLibraryDocDtoToLibraryShort (LibraryResponseDto libraryResponseDto) {
        return libraryResponseDto.getDocs()
                .stream()
                .map(d -> new LibraryDocShort(d.getKey(), d.getTitle(), d.getAuthor_name(), d.getFirst_publish_year()))
                .collect(Collectors.toList());
    }

    @GetMapping
    public List<LibraryDocShort> getLibrarySearch(@RequestParam(required=false) String title,
                                                  @RequestParam(required=false) String author) {
        String query = "";
        if (title != null) {
            query = "title=" + title;
        }
        if (author != null) {
            if (query.isEmpty()) {
                query= "author=" + author;
            } else {
                query = query+ "&author=" + author;
            }
        }
        if (query.isEmpty()) {
            query = "q=trending_score_hourly_sum:[1+TO+1]+language:ger&sort=trending&limit=5";
        }
        System.out.println(query);
        LibraryResponseDto result = libraryRestClientService.searchLibrary(query);
        return transformLibraryDocDtoToLibraryShort(result);
    }

}
