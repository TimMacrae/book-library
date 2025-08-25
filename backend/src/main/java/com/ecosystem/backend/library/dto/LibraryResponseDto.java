package com.ecosystem.backend.library.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class LibraryResponseDto {
    private List<LibraryDocDto> docs;
}
