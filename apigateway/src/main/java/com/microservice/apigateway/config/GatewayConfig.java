package com.microservice.apigateway.config;

import com.microservice.apigateway.filter.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Autowired
    private JwtAuthenticationFilter filter;

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes().route("AUTH-SERVICE", r -> r.path("/authenticate/**").filters(f -> f.filter(filter)).uri("http://localhost:7777"))
                                .route("BOOKING-SERVICE", r -> r.path("/schedules/**").filters(f -> f.filter(filter)).uri("http://localhost:8082"))
                                .route("BOOKING-SERVICE", r -> r.path("/booking/**").filters(f -> f.filter(filter)).uri("http://localhost:8082"))
                                .build();
    }
}
