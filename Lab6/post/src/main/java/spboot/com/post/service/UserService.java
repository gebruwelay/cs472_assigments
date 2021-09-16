package spboot.com.post.service;


import spboot.com.post.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public void addUser(User user);
    public Optional<User> getUserByID(Integer id);
    public List<User> getAll();
    public List getUserPosts(Integer id);
    public List<User> getMorethanOnePost();

}
