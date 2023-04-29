package com.benkyousuru.pbl03api;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Component
public class SpringRestConfiguration implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.disableDefaultExposure();
        config.setBasePath("/api");
        // cors.addMapping("/**").allowedOrigins("http://localhost:3000");
        // cors.addMapping("/**").allowedMethods("GET", "POST", "PUT", "DELETE");
        // cors.addMapping("/**").allowedHeaders("*");
        // cors.addMapping("/**").allowCredentials(true);
        // cors.addMapping("/**").maxAge(3600);
    }
}