package com.ecosystem.backend.utility;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class IdServiceTest {
    @Test
    void generateId_ShouldReturnValidUUID() {
        String id = IdService.generateId();
        assertNotNull(id);
        assertFalse(id.isEmpty());
        assertDoesNotThrow(() -> java.util.UUID.fromString(id));
    }
}