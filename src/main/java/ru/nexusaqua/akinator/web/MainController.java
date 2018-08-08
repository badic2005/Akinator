package ru.nexusaqua.akinator.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    String home() {
        return "static/index.html";
    }
}
