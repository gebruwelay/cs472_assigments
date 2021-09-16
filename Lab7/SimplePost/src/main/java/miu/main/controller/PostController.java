package miu.main.controller;

import miu.main.domain.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import miu.main.service.PostService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class PostController {


    @Autowired
    PostService postService;

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @GetMapping("/posts")
    public List<Post> getPosts(){
        List<Post> posts =  postService.getAll();
        return posts;
    }

    @GetMapping("/posts/{id}")
    public Optional<Post> getPostById(@PathVariable String id){

        Optional<Post> p=  postService.getPostById(Long.parseLong(id));
        return  p;
    }

    @GetMapping("/admin")
    public String inValidTest2(){
        return "OK";
    }

    @Autowired
    public void setPostService(PostService postService) {
        this.postService = postService;
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PostMapping
    public void addPost(@RequestBody Post post){
        postService.addPost(post);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @DeleteMapping("/{id}")
    public  void deletePost(@PathVariable("id") Long id) {
        postService.deletePost(id);
    }
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PutMapping("/{id}")
    public  void updatePost(@PathVariable("id") Long id){
        postService.updatePost(id);
    }

}
