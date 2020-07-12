import styled, { css } from "styled-components";

export default css``;

export const StyledSearch = styled.div`{
  position: relative;
  
  input {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 3px solid ${({ theme }) => theme.text};
    border-radius: 50%;
    background: none;
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    font-weight: 400;
    font-family: Roboto;
    outline: 0;
    transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out, padding 0.2s;
    transition-delay: 0.4s;
  }
  
  .search {
    background: none;
    position: absolute;
    top: 0px;
    right: 0;
    height: 30px;
    width: 30px;
    padding: 0;
    border-radius: 100%;
    outline: 0;
    border: 0;
    color: inherit;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    /* transform: translate(-100%, -50%); */
      &:before {
        content: "";
        position: absolute;
        width: 12px;
        height: 2px;
        background-color: ${({ theme }) => theme.text};
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        margin-top: 9px;
        margin-left: 3px;
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
      }
  }
  
  .close {
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
    
    &:before {
      content: "";
      position: absolute;
      width: 20px;
      height: 3px;
      margin-top: -1px;
      margin-left: -13px;
      background-color: ${({ theme }) => theme.text};
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
    }
    
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 3px;
      background-color: ${({ theme }) => theme.text};
      margin-top: -1px;
      margin-left: -13px;
      cursor: pointer;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }
  
  .square {
    box-sizing: border-box;
    padding: 0 40px 0 10px;
    width: 300px;
    height: 30px;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.highLight};
    border-radius: 0;
    background: none;
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamilyRegular};
    font-size: 22px;
    font-weight: 400;
    outline: 0;
    -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
      padding 0.2s;
    transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
      padding 0.2s;
    -webkit-transition-delay: 0.4s, 0s, 0.4s;
    transition-delay: 0.4s, 0s, 0.4s;
    
    @media only screen and (max-width : 640px) {
      width: 230px;
    }
  }

}` 