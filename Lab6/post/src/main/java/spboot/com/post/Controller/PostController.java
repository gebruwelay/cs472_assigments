package spboot.com.post.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.Link;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import spboot.com.post.domain.Post;
import spboot.com.post.service.PostService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.reactive.WebFluxLinkBuilder.linkTo;
import static org.springframework.hateoas.server.reactive.WebFluxLinkBuilder.methodOn;
@CrossOrigin(origins = "*")
@RequestMapping("/posts")
@RestController
public class PostController {
    @Autowired
    PostService service;
    @GetMapping()
    public List<Post> getAllPost() {
        System.out.println(service.getAll());
        return  service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Post> getPostById(@PathVariable("id") Integer id) {
        return service.getPostById(id);
    }
    @PostMapping
    public void addPost(@RequestBody Post post){
        service.addPost(post);
    }

    @DeleteMapping("/{id}")
    public  void deletePost(@PathVariable("id") Integer id) {
        service.deletePost(id);
    }
    @PutMapping("/{id}")
    public  void updatePost(@PathVariable("id") Integer id){
        service.updatePost(id);
    }

}
