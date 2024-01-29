import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
// import data from "../../data.json";
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

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    // const post = data.find((item) => {
    //     return item.idx == postId;
    // });

    const [post, setPost] = useState([]);
    const [comment, setComment] = useState("");
    const [refresh, setRefresh] = useState(1);

    useEffect(() => {        

        axios.get(`/blog/get?idx=${postId}`)
            .then(response => {
                console.log(response);
                setPost(response.data)
            })
            .catch(error => console.log(error));
    }, [refresh]);
    console.log("!!!~");
    // console.log(post);
    console.log(post.blogReplyList);
    console.log("!!!~");   

    const deletePost = () => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            axios.get(`/blog/remove?idx=${postId}`)
            .then(response => {
                alert("삭제 완료!");
                navigate("/");
            })
            .catch(error => console.log(error));
        }
    }

    const submitReply = () => {
        axios.post("/blog/replyWrite", {
            content: comment,
            idx: postId
        })
            .then(() => {
                setComment("");
                
                alert("댓글 등록 완료!");
                setRefresh(refresh => refresh * -1);
            })
            .catch(error => console.log(error));
    }

    return (
        <Wrapper>
            <Container>
                <Button 
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <Button 
                    title="수정"
                    onClick={() => {
                        navigate(`/edit/${postId}`);
                    }}
                />
                <Button 
                    title="삭제"
                    onClick={deletePost}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.blogReplyList} idx={postId} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <Button
                    title="댓글 작성하기"
                    onClick={submitReply}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;