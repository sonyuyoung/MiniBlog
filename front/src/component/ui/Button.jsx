import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 0px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #d3c5c5;
  color: #444;
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
