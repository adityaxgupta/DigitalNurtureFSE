package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(OrmLearnApplication.class, args);
	}

	@Bean
	public CommandLineRunner testJpa(CountryRepository repository) {
		return args -> {
			LOGGER.info("Inside testJpa method. Saving a new country...");

			// Add a new country
			Country newCountry = new Country("IN", "India");
			repository.save(newCountry);

			LOGGER.info("Country saved. Now fetching from database...");

			// Retrieve and print the country
			Country retrievedCountry = repository.findById("IN").orElse(null);
			LOGGER.info("Retrieved Country: " + retrievedCountry);
		};
	}
}