package spboot.com.post.service;

import org.springframework.stereotype.Service;
import spboot.com.post.domain.Post;

import java.util.List;
import java.util.Optional;


public interface PostService {
    public List<Post> getAll();
    public Optional<Post> getPostById(Integer id);
    public  void addPost(Post post);
    public void  deletePost(Integer id);
    public void updatePost(Integer id);
}
