package miu.main.controller;

import miu.main.domain.Post;
import miu.main.domain.User;
import miu.main.service.PostService;
import miu.main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    PostService post;
    @Autowired
    UserService service;
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @GetMapping
    public List<User> getAllUsers( ){
        return service.getAll();
    }
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @GetMapping("/{id}")
    public Optional<User> getUserByID(@PathVariable("id") Integer id)
    {
        return  service.getUserByID(id);
    }
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @GetMapping("/{id}/posts")
    public List getUserPosts(@PathVariable("id") Integer id)
    {
        return  service.getUserPosts(id);
    }
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @GetMapping("/morethanone")
    public List<Post> getMorethanOnePost(){
        return  service.getMorethanOnePost();
    }
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PostMapping
    public void addUser(@RequestBody User user){
        service.addUser(user);
    }
}
