package com.ecosystem.backend.library.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class LibraryDocDto {
    private List<String> author_name;
    private Integer first_publish_year;
    private String key;
    private String title;
    private Integer cover_i;
}
