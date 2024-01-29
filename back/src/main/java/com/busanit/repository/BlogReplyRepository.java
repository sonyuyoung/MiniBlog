package com.busanit.repository;

import com.busanit.entity.BlogReply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BlogReplyRepository extends JpaRepository<BlogReply, Long> {

    List<BlogReply> findByBlog_Idx(Long blogIdx);
}
