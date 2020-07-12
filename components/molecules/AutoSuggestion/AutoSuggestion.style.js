import styled, { css } from "styled-components";

export default css``;

export const StyledAutoSuggestion = styled.div`{
  position: absolute;
  width: 300px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin-top: 40px;
  box-shadow: -1px 11px 20px 0px rgba(0,0,0,0.2);
  min-height: 40px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 10px;
  height: 100%;
  
  a {
    border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  }
  
  p {
    color: ${({ theme }) => theme.highLight};
  }
}`;