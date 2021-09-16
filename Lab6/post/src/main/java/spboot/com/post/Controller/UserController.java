package spboot.com.post.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spboot.com.post.domain.User;
import spboot.com.post.service.PostService;
import spboot.com.post.service.UserService;

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
    @GetMapping
    public List<User> getAllUsers( ){
        return service.getAll();
    }
    @GetMapping("/{id}")
    public Optional<User> getUserByID(@PathVariable("id") Integer id)
    {
        return  service.getUserByID(id);
    }
    @GetMapping("/{id}/posts")
    public List getUserPosts(@PathVariable("id") Integer id)
    {
        return  service.getUserPosts(id);
    }
    @GetMapping("/morethanone")
    public List<User> getMorethanOnePost(){
        return  service.getMorethanOnePost();
    }

    @PostMapping
    public void addUser(@RequestBody User user){
        user.setPosts(post.getAll());
        System.out.println(user.getId());
        service.addUser(user);
    }
}
