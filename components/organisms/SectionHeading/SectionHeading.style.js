import styled, { css } from "styled-components";

export default css``;

export const StyledHeading = styled.header`{
  position: relative;
  margin-bottom: 60px;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${({ theme }) => theme.highLight};
  padding: 15px;
  margin-top: -2rem;

  
  h1 {
    color: #fff;
  }
}` 
