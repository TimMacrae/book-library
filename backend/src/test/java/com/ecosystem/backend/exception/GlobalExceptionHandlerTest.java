package com.ecosystem.backend.exception;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GlobalExceptionHandlerTest {


    @Test
    void globalExceptionHandler_handleValidationException_returnsBadRequestWithMessage() {
        // Mock BindingResult and FieldError
        BindingResult bindingResult = mock(BindingResult.class);
        FieldError fieldError = new FieldError("book", "title", "must not be blank");
        when(bindingResult.getFieldErrors()).thenReturn(Collections.singletonList(fieldError));

        MethodArgumentNotValidException exception = mock(MethodArgumentNotValidException.class);
        when(exception.getBindingResult()).thenReturn(bindingResult);

        GlobalExceptionHandler handler = new GlobalExceptionHandler();
        ResponseEntity<ExceptionMessage> response = handler.handleValidationException(exception);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNotNull(response.getBody());
        System.out.println(response.getBody());
        assertTrue(response.getBody().message().contains("title must not be blank"));
    }

    @Test
    void globalExceptionHandler_handleInternalServerException_returnsInternalServerError() {
        Exception ex = new RuntimeException("Something went wrong");
        GlobalExceptionHandler handler = new GlobalExceptionHandler();
        ResponseEntity<ExceptionMessage> response = handler.handleInternalServerException(ex);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Internal server error", response.getBody().message());
        assertNotNull(response.getBody().timestamp());
    }
}