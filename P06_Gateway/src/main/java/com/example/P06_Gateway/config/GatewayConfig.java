package com.example.P06_Gateway.config;

import java.util.Arrays;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
 

@Configuration
public class GatewayConfig {


    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes().route("P06AUTHSERVICE", r -> r.path("/authenticate/**").uri("http://localhost:8062"))
                                .route("P06BOOKING-SERVICE", r -> r.path("/schedules/**").uri("http://localhost:8063"))
                                .route("P06BOOKING-SERVICE", r -> r.path("/booking/**").uri("http://localhost:8063"))
                                .route("P06BOOKING-SERVICE", r -> r.path("/donation/**").uri("http://localhost:8063"))
                                .route("P06ACCOMODATION",r->r.path("/Accomodation/**").uri("http://localhost:9065"))
                                .build();
    }
    
    
    @Bean
    CorsWebFilter corsWebFilter() {
    	UrlBasedCorsConfigurationSource  source = new UrlBasedCorsConfigurationSource();
    	
       CorsConfiguration config = new CorsConfiguration();
	    
	    config.setAllowCredentials(true);
	    config.setAllowedOrigins(Arrays.asList("http://localhost:3006")); // Ensure it matches your frontend URL
	    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	    config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
	    config.setExposedHeaders(Arrays.asList("Authorization")); // Expose headers if needed
	    
	    source.registerCorsConfiguration("/**", config);

    	return new CorsWebFilter(source);
    	
    }
    


}
 