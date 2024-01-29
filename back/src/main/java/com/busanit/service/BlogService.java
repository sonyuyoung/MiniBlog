package com.busanit.service;

import com.busanit.domain.BlogDTO;
import com.busanit.entity.Blog;
import com.busanit.repository.BlogRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class BlogService {

    private BlogRepository blogRepository;

    public List<Blog> getBlogList() {
        return blogRepository.findAll();
    }

    public List<Blog> getBlogSearchList(String searchText) {
        return blogRepository.findByTitleContaining(searchText);
    }

    public Blog getBlog(Long idx) {
        return blogRepository.findByIdx(idx);
    }

    public void writeBlog(BlogDTO blogDTO) {
        // Blog 엔터티 객체 생성
        Blog blog = new Blog();

        // 전달된 BlogDTO 객체에서 idx가 존재하는 경우, 해당 idx를 설정
        if(blogDTO.getIdx() != null) {
            blog.setIdx(blogDTO.getIdx());
        }

        // 전달된 BlogDTO 객체에서 title을 가져와서 Blog 엔터티에 설정
        blog.setTitle(blogDTO.getTitle());

        // 전달된 BlogDTO 객체에서 content를 가져와서 Blog 엔터티에 설정
        blog.setContent(blogDTO.getContent());

        // 현재 시간을 생성 날짜로 설정
        blog.setCreatedDate(LocalDateTime.now());

        // Blog 엔터티를 레포지토리를 통해 저장
        blogRepository.save(blog);
    }

    public void removeBlog(Long idx) {
        blogRepository.deleteById(idx);
    }
}
