package miu.main.repository;


import miu.main.domain.Post;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {

    Optional<Post> findById(Long id);

    List<Post> findAll();
    @Modifying
    @Query("update Post set title ='updated one' where id= :id")
    public void updatePosts(Long id);
}
