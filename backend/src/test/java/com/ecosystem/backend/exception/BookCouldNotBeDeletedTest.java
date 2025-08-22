package com.ecosystem.backend.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BookCouldNotBeDeletedTest {
    @Test
    void shouldSetExceptionMessage() {
        BookCouldNotBeDeleted exception = new BookCouldNotBeDeleted();
        assertEquals("The Book could not be deleted", exception.getMessage());
    }
}