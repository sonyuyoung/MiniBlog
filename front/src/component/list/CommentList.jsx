import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const { comments, idx } = props;

    console.log("@@@@@");
    console.log(comments);

    return (
        <Wrapper>
            {comments && comments.map((comment, index) => {
                console.log("~~~~");
                console.log(comment.ridx);
                console.log(comment.content);
                return <CommentListItem key={index} ridx={comment.ridx} comment={comment.content} idx={idx} />;
            })}
        </Wrapper>
    );
}

export default CommentList;