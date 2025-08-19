package com.ecosystem.backend.utility;

import java.util.UUID;

public class IdService {
    public static String generateId() {
        return UUID.randomUUID().toString();
    }
}
