package miu.main.controller;

import miu.main.domain.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import miu.main.service.PostService;

import java.util.List;

@Controller
@RequestMapping("/")
public class IndexController {

    @Autowired
    PostService postService;

    @GetMapping("/home")
    public String homepage() {


        List<Post> posts =  postService.getAll();
        System.out.println(posts.get(0).getAuthor());

        return "index";
    }

}