package com.busanit.controller;

import com.busanit.domain.BlogDTO;
import com.busanit.domain.BlogReplyDTO;
import com.busanit.entity.Blog;
import com.busanit.entity.BlogReply;
import com.busanit.repository.BlogRepository;
import com.busanit.service.BlogReplyService;
import com.busanit.service.BlogService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
@AllArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
public class BlogRestController {

    private BlogService blogService;
    private BlogReplyService blogReplyService;

    @RequestMapping("/test")
    public String runTest() {
        return "연동";
    }

    @GetMapping("/list")
    public List<Blog> getBlogList() {
        return blogService.getBlogList();
    }

    @GetMapping("/searchList")
    public List<Blog> getBlogSearchList(String searchText) {
        return blogService.getBlogSearchList(searchText);
    }

    @GetMapping("/get")
    public Blog getBlog(Long idx) {
        return blogService.getBlog(idx);
    }

    @PostMapping("/write")
    public void writeBlog(@RequestBody BlogDTO blogDTO) {
        blogService.writeBlog(blogDTO);
    }

    @GetMapping("/remove")
    public void removeBlog(Long idx) {
        blogService.removeBlog(idx);
    }

//    @GetMapping("/replyList")
//    public List<BlogReply> getBlogReplyList(Long blogIdx) {
//        return blogReplyService.getBlogReplyList(blogIdx);
//    }

    @PostMapping("/replyWrite")
    public void writeReply(@RequestBody BlogReplyDTO blogReplyDTO) {
        blogReplyService.writeReply(blogReplyDTO);
    }

    @GetMapping("/removeReply")
    public void removeReply(Long rIdx) {
        blogReplyService.removeReply(rIdx);
    }
}
