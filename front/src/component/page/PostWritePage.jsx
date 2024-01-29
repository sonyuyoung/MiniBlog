import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from "axios";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    const [blogContent, setBlogContent] = useState({
       title: "",
       content: "" 
    });

    const submitBlog = () => {
        axios.post("/blog/write", {
            title: blogContent.title,
            content: blogContent.content
        })
            .then(() => {
                setBlogContent({
                    title: "",
                    content: ""
                });
                
                alert("등록 완료!");
                navigate("/");
            });
    }

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={blogContent.title}
                    onChange={(event) => {
                        setBlogContent({
                            ...blogContent,
                            title: event.target.value
                        });
                    }}
                />

                <TextInput
                    height={480}
                    value={blogContent.content}
                    onChange={(event) => {
                        setBlogContent({
                            ...blogContent,
                            content: event.target.value
                        });
                    }}
                />

                <Button
                    title="글 작성하기"
                    onClick={submitBlog}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;