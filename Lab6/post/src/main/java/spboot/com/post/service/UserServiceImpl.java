package spboot.com.post.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spboot.com.post.Repository.UserRepository;
import spboot.com.post.domain.User;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements  UserService{
    @Autowired
    UserRepository repository;
    @Override
    public void addUser(User user) {
        System.out.println(user);
        repository.save(user);
    }
    @Override
    public Optional<User> getUserByID(Integer id) {
        return repository.findById(id);
    }

    @Override
    public List<User> getAll() {
        return repository.findAll();
    }

    @Override
    public List getUserPosts(Integer id) {
       return  repository.findById(id).get().getPosts();
    }

    @Override
    public List<User> getMorethanOnePost() {
        return repository.getMorethanOnePost();
    }
}
