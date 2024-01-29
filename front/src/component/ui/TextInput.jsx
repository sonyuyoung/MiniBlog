import styled from "styled-components";

const StyledTextarea = styled.textarea`
  /* 전체 너비는 화면 폭에서 32px를 뺀 값으로 설정 */
  width: calc(100% - 32px);

  /* height 프롭스가 전달되면 해당 값으로 높이 설정 */
  ${(props) => props.height && `height: ${props.height}px;`}

  /* 내부 여백과 글꼴 크기, 줄 높이, 배경색, 그림자 등의 스타일 설정 */
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  background-color: #f2eded;
`;

function TextInput(props) {
  const { height, value, onChange } = props;
  // 부모 컴포넌트에서 전달된 속성들을 가져옴

  // 스타일드 텍스트 영역을 렌더링하고, 부모 컴포넌트에서 전달된 값과 이벤트 핸들러를 전달
  return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
