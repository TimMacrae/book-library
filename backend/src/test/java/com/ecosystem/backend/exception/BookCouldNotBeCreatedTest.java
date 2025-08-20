package com.ecosystem.backend.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BookCouldNotBeCreatedTest {
    @Test
    void shouldSetExceptionMessage() {
        BookCouldNotBeCreated exception = new BookCouldNotBeCreated();
        assertEquals("The Book could not be created", exception.getMessage());
    }
}