package com.ecosystem.backend.exception;

public class BookCouldNotBeDeleted extends RuntimeException {
    public BookCouldNotBeDeleted() {
        super("The Book could not be deleted");
    }
}
