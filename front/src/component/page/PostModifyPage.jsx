import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

function PostModifyPage(props) {
    const navigate = useNavigate();    
    const { postId } = useParams();

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");

    const [blogContent, setBlogContent] = useState({
        title: '',
        content: ''
    });
      
    useEffect(() => {
        axios.get(`/blog/get?idx=${postId}`)
            .then((response) => {
                console.log(response);
                console.log(response.data);
            setBlogContent({
              title: response.data.title,
              content: response.data.content,
            })
          })
          .catch(error => console.log(error));
    }, []);

    const submitPost = () => {
        console.log("!!!!!");
        console.log(blogContent);
        console.log("!!!!!");
           
        axios.post('/blog/write', { 
          idx: postId,
          title: blogContent.title,
          content: blogContent.content
        }).then(() => {
          setBlogContent({
            title: "",
            content: "",
          });
          
          alert('수정 완료!');
          navigate(`/post/${postId}`);
        });
    };

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
                    title="수정하기"
                    onClick={submitPost}
                />
            </Container>
        </Wrapper>
    );
}

export default PostModifyPage;