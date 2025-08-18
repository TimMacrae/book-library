package com.ecosystem.backend.models;

import java.util.List;

public record Book(String id,
                   String title,
                   String description,
                   List<String> authors,
                   String firstPublishDate,
                   String cover,
                   String language,
                   String isbn
                   ) {
}
