package com.example.P06_Gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class P06Gateway {

	public static void main(String[] args) {
		SpringApplication.run(P06Gateway.class, args);
	}

}
