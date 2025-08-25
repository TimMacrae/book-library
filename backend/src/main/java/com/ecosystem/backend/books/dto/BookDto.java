package com.ecosystem.backend.books.dto;

import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record BookDto(
       @NotEmpty String title,
       @NotEmpty String description,
       @NotEmpty List<String> authors,
       @NotEmpty String firstPublishDate,
       String cover,
       @NotEmpty String language,
       @NotEmpty String isbn
) {
}
