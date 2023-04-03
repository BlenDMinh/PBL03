package com.benkyousuru.pbl03api.model.service.implement.utils;

import java.nio.charset.StandardCharsets;

import org.springframework.stereotype.Component;

import com.google.common.hash.Hashing;

@Component
public class TokenGenerator {
    public String genToken(String content) {
        return Hashing.sha256().hashString(content, StandardCharsets.UTF_8).toString();
    }
}
