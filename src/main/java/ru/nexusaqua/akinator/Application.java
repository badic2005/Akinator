package ru.nexusaqua.akinator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@SpringBootApplication
@ComponentScan("ru.nexusaqua.akinator")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}