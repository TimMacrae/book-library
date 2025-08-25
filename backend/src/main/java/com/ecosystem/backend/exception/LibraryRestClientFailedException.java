package com.ecosystem.backend.exception;

public class LibraryRestClientFailedException extends RuntimeException {
    public LibraryRestClientFailedException(String message) {
        super("LibraryClientFailed: " + message);
    }
}
