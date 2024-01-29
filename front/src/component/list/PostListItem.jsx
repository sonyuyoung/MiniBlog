import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* border: 1px solid grey; */

  border-radius: 8px;

  cursor: pointer;
  background: #f2eded;
  color: #444;
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;
const DateText = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
  padding: 0;
`;

function PostListItem(props) {
  const { post, onClick } = props;

  const createdDate = new Date(post.createdDate);
  const formattedDate = createdDate.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Wrapper onClick={onClick}>
      <DateText>{formattedDate}</DateText>
      <TitleText> Title : {post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;
