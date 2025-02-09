package com.example.P06_Discovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class P06Discovery {

	public static void main(String[] args) {
		SpringApplication.run(P06Discovery.class, args);
	}

}
