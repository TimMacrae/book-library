package com.ecosystem.backend.library.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class LibraryDocShort {
    private String key;
    private String title;
    private List<String> author_name;
    private int first_publish_year;
}
