package com.ecosystem.backend.library;

import com.ecosystem.backend.library.dto.LibraryDocDto;
import com.ecosystem.backend.library.dto.LibraryResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/library")
@AllArgsConstructor
public class LibraryController {
    private final LibraryRestClientService libraryRestClientService;

    @GetMapping
    public List<LibraryDocDto> getLibrarySearch(@RequestParam(required=false) String title,
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
            query = "q=trending_score_hourly_sum:[1+TO+1]+language:ger&sort=trending&limit=20";
        }
        LibraryResponseDto result = libraryRestClientService.searchLibrary(query);
        return result.getDocs();
    }

}
