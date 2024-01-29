import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import PostModifyPage from "./component/page/PostModifyPage";

const MainTitleText = styled.p`
  font-size: 46px;
  font-weight: bold;
  text-align: center;
  color: #777;
`;

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/blog/test")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <MainTitleText>Diary</MainTitleText>
      <div>
        <p>서버에서 가져온 값 : {data}</p>
      </div>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="edit/:postId" element={<PostModifyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
