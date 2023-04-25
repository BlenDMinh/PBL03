package com.benkyousuru.pbl03api.model.service.implement.utils;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Component;

import com.benkyousuru.pbl03api.model.service.IPasswordEncoder;

@Component
public class PasswordEncoderTemp implements IPasswordEncoder {
    final int ROUND = 4;
    public String encrypt(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt(ROUND));
    }

    public boolean check(String password, String hash) {
        String h = BCrypt.hashpw("haha", BCrypt.gensalt(5));
        System.out.println(BCrypt.checkpw("haha", h));
        return BCrypt.checkpw(password, hash);
    }
}
