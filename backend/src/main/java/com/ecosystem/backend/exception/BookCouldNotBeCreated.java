package com.ecosystem.backend.exception;

public class BookCouldNotBeCreated extends RuntimeException {
    public BookCouldNotBeCreated() {
        super("The Book could not be created");
    }
}
