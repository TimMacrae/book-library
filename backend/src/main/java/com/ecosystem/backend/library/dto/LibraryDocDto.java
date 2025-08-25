package com.ecosystem.backend.library.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class LibraryDocDto {
    private int cover_i;
    private boolean has_fulltext;
    private int edition_count;
    private String title;
    private List<String> author_name;
    private int first_publish_year;
    private String key;
    private List<String> ia;
    private List<String> author_key;
    private boolean public_scan_b;
}
