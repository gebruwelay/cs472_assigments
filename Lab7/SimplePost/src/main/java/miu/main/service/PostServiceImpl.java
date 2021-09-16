package miu.main.service;

import miu.main.domain.Post;
import miu.main.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostServiceImpl implements PostService {
    @Autowired
    PostRepository repository;
    @Override
    public List<Post> getAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Post> getPostById(Long id) {
        return repository.findById(id);
    }

    @Override
    public void addPost(Post post) {
        repository.save(post);
    }

    @Override
    public void deletePost(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void updatePost(@Param("id") Long id) {
        repository.updatePosts(id);
    }
}
