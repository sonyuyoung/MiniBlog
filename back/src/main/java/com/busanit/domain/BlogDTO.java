package com.busanit.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Getter
@Setter
public class BlogDTO {

    private Long idx;
    private String title;
    private String content;




}
