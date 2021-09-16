package spboot.com.post.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import spboot.com.post.Repository.PostRepository;
import spboot.com.post.domain.Post;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostServiceImpl implements  PostService{
    @Autowired
    PostRepository repository;
    @Override
    public List<Post> getAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Post> getPostById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public void addPost(Post post) {
        repository.save(post);
    }

    @Override
    public void deletePost(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void updatePost(@Param("id") Integer id) {
        repository.updatePosts(id);
    }
}
