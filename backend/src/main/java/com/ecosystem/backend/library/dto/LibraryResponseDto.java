package com.ecosystem.backend.library.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class LibraryResponseDto {
    int start;
    int num_found;
    private List<LibraryDocDto> docs;
}
