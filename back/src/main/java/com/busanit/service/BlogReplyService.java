package com.busanit.service;

import com.busanit.domain.BlogReplyDTO;
import com.busanit.entity.Blog;
import com.busanit.entity.BlogReply;
import com.busanit.repository.BlogReplyRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BlogReplyService {

    private BlogReplyRepository blogReplyRepository;

    public List<BlogReply> getBlogReplyList(Long blogIdx) {
        return blogReplyRepository.findByBlog_Idx(blogIdx);
    }

    public void writeReply(BlogReplyDTO blogReplyDTO) {
        BlogReply blogReply = new BlogReply();
        if(blogReplyDTO.getR_idx() != null) {
            blogReply.setRIdx(blogReplyDTO.getR_idx());
        }
        blogReply.setContent(blogReplyDTO.getContent());
        Blog blog = new Blog();
        blog.setIdx(blogReplyDTO.getIdx());
        blogReply.setBlog(blog);

        blogReplyRepository.save(blogReply);
    }

    public void removeReply(Long rIdx) {
        blogReplyRepository.deleteById(rIdx);
    }
}
