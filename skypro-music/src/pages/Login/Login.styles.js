import styled from "styled-components";
import { Link } from "react-router-dom";
export const Login = styled.button`
  border-radius: 60px;
  border: 1px solid #000;
  width: 144px;
  height: 39px;
  margin-bottom: 20px;
`;
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
export const StyledLink = styled(Link)`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
