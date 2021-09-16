package spboot.com.post.Repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import spboot.com.post.domain.Post;
import  java.util.*;


public interface PostRepository extends CrudRepository<Post, Integer> {
    public List<Post>  findAll();
    public Optional<Post> findById(Integer id);
    public void deleteById(Integer id);
    @Modifying
    @Query("update Post set title ='updated one' where id= :id")
    public void updatePosts(Integer id);
}
