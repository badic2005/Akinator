package ru.nexusaqua.akinator.web;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;


import java.util.Map;

@Controller
public class MainController {

    @RequestMapping("/")
    public String greeting(Map<String, String> model) {

        return "index";
    }
}
