package spboot.com.post.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.hateoas.RepresentationModel;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="Post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    Integer id;
    String title;
    String content;
    String author;
}
