import styled, { css } from "styled-components";

export default css``;

export const StyledHeader = styled.header`{
  width: 100%;
  top: 0;
  background-color: ${({ theme }) => theme.body};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
  position: fixed;
  min-height: 4.6rem;
  z-index: 101;
  
  .header-logo {
    color: ${({ theme }) => theme.highLight};
    font-family: ${props => props.theme.fontFamilyRegular};
  }
  
  .header-container {
    min-height: 4.6rem;
  }
}` 
