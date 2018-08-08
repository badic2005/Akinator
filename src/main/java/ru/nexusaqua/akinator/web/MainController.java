package ru.nexusaqua.akinator.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/greeting")
    public String greeting() {
        return "index.html";
    }
}
