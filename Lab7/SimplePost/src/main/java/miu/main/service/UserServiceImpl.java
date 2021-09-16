package miu.main.service;

import miu.main.domain.Post;
import miu.main.domain.User;
import miu.main.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



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
    public List<Post> getMorethanOnePost() {
        return repository.findMoreThanOnce();
    }
}
