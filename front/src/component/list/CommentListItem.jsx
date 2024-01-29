import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../ui/Button";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
`;

const ButtonArea = styled.span`

`;

function CommentListItem(props) {
    const { comment, ridx, idx } = props;

    console.log("@@@ ridx : " + ridx);
    console.log("@@@ comment : " + comment);
    const [visible, setVisible] = useState(false);
    const [content, setContent] = useState(comment);
  
    const submitReply = () => { 
        console.log("~~~~rIdx = " + ridx);       
        axios.post("/blog/replyWrite", {
            r_idx: ridx,
            content: content,
            idx: idx
        })
            .then(() => {                
                alert("댓글 수정 완료!");
                window.location.reload();
            })
            .catch(error => console.log(error));
    }

    const deleteReply = () => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            axios.get(`/blog/removeReply?rIdx=${ridx}`)
            .then(response => {
                alert("삭제 완료!");
                window.location.reload();
            })
            .catch(error => console.log(error));
        }
    }

    return (
        <Wrapper>
            <ContentText>
                {visible ? 
                    <>
                    <input 
                        value={content} 
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}                    
                    /> 
                    <button
                        onClick={submitReply}
                    >등록</button>
                    </>
                    : comment}
            </ContentText>
            <ButtonArea>
                <Button 
                    title="수정"                    
                    onClick={() => {
                        setVisible(!visible);
                    }}
                />
                <Button 
                    title="삭제"
                    onClick={deleteReply}
                />
            </ButtonArea>
        </Wrapper>
    );
}

export default CommentListItem;