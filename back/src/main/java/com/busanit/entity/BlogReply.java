package com.busanit.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="blog_reply")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BlogReply extends BaseEntity{
    @Id
    @Column(name="r_idx")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long rIdx;

    @Column(nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Blog blog;
}
