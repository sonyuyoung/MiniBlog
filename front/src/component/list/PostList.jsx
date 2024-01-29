import styled from "styled-components";
import PostListItem from "./PostListItem";

// 스타일드 컴포넌트를 사용하여 스타일이 적용된 PostList 컴포넌트의 부모 컨테이너 정의
const Wrapper = styled.div`
  /* 세로 방향으로 정렬된 컬럼 레이아웃 설정 */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 아이템들을 좌측 정렬 */
  justify-content: center; /* 아이템들을 수직 중앙 정렬 */

  /* 자식 요소 중 마지막 요소가 아닌 경우에만 아래 마진 적용 */
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
    :hover {
      background: #d3c5c5;
    }
  }
`;

// PostList 컴포넌트 정의
function PostList(props) {
  // props에서 posts와 onClickItem을 추출
  const { posts, onClickItem } = props;

  // PostList를 렌더링
  return (
    <Wrapper>
      {/* 블로그 글 목록을 순회하며 PostListItem 컴포넌트를 생성 */}
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.idx} // 고유한 키 값으로 글의 인덱스 사용
            post={post} // PostListItem에 전달할 글 데이터
            onClick={() => {
              onClickItem(post); // 클릭 이벤트 핸들러 호출
            }}
          />
        );
      })}
    </Wrapper>
  );
}

// PostList 컴포넌트 내보내기
export default PostList;
