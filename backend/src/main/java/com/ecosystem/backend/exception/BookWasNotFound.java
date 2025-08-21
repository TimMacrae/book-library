package com.ecosystem.backend.exception;

public class BookWasNotFound extends RuntimeException {
    public BookWasNotFound(String id) {
        super("The Book with the id " + id + " was not found");
    }
}
