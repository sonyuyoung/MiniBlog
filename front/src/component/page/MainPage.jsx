import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
//import data from "../../data.json";
import axios from "axios";

// 스타일드 컴포넌트를 사용한 CSS 스타일 정의
const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// & - 현재 요소를 나타냄
const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function MainPage(props) {
  const {} = props;

  // useNavigate 훅을 사용하여 페이지 간 이동을 관리
  const navigate = useNavigate();

  // 게시글 데이터와 검색어 상태를 관리하는 상태 변수들
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // 컴포넌트가 마운트될 때 한 번 실행되는 useEffect 훅
  useEffect(() => {
    // 서버에서 블로그 글 목록을 가져오는 비동기 요청
    axios
      .get("/blog/list")
      .then((response) => {
        setData(response.data);
        console.log("Received data from server:", response.data); // 추가된 로그
      })
      .catch((error) => console.log(error));
  }, []);
  // 검색어로 블로그 글을 검색하는 함수
  const searchData = () => {
    // 서버에서 검색어에 맞는 블로그 글 목록을 가져오는 비동기 요청
    axios
      .get(`/blog/searchList?searchText=${searchText}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  // 화면 렌더링
  return (
    <Wrapper>
      <Container>
        <div>
          {/* 검색어 입력을 위한 input 요소 */}
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* 검색 버튼을 클릭하면 searchData 함수 호출 */}
          <button onClick={searchData}>Search</button>
        </div>

        {/* 글 작성하기 버튼 */}
        <Button
          title="Post Diary"
          onClick={() => {
            navigate("/post-write");
          }}
        />

        {/* 블로그 글 목록을 나타내는 PostList 컴포넌트 */}
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.idx}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
