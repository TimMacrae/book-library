package com.ecosystem.backend.exception;

import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

class ExceptionMessageTest {
    @Test
    void exceptionMessage_withMessageAndTimestamp_setsFieldsCorrectly() {
        String msg = "Test error";
        LocalDateTime now = LocalDateTime.now();
        ExceptionMessage message = new ExceptionMessage(msg, now);

        assertEquals(msg, message.message());
        assertEquals(now, message.timestamp());
    }

    @Test
    void exceptionMessage_withMessage_setsMessageAndCurrentTimestamp() {
        String msg = "Only message";
        ExceptionMessage em = new ExceptionMessage(msg);

        assertEquals(msg, em.message());
        assertNotNull(em.timestamp());
    }
}