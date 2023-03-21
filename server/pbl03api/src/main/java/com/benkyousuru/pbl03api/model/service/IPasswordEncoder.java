package com.benkyousuru.pbl03api.model.service;

public interface IPasswordEncoder {
    String encrypt(String password);

    boolean check(String password, String hash);
}
