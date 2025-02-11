//package com.microservice.bookingservice.config;
// 
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class WebConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**") // Apply CORS to all API endpoints
//                .allowedOrigins("http://localhost:3006") // Allow React frontend
//                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow HTTP methods
//                .allowedHeaders("*") // Allow all headers
//                .allowCredentials(true); // Allow cookies
//    }
//}
