package miu.main.service;

import miu.main.domain.Post;

import java.util.List;
import java.util.Optional;


public interface PostService {
    public List<Post> getAll();
    public Optional<Post> getPostById(Long id);
    public  void addPost(Post post);
    public void  deletePost(Long id);
    public void updatePost(Long id);
}
