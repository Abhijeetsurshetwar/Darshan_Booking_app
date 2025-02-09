package com.example.P06_Gateway.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {


    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes().route("AUTH-SERVICE", r -> r.path("/authenticate/**").uri("http://localhost:7777"))
                                .route("BOOKING-SERVICE", r -> r.path("/schedules/**").uri("http://localhost:8082"))
                                .route("BOOKING-SERVICE", r -> r.path("/booking/**").uri("http://localhost:8082"))
                                .build();
    }
}
