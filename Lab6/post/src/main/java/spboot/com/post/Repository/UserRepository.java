package spboot.com.post.Repository;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import spboot.com.post.domain.User;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {
    public List<User> findAll();
   @Query("SELECT u FROM User u where u.posts.size>1")
    public List<User> getMorethanOnePost();
}
