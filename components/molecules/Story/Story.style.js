import styled, { css } from "styled-components";

export default css``;

export const StyledStory = styled.section`{
  border-radius: 5px;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 15px;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.highLight};
  position: relative;
  z-index: 1;
  
  &:nth-child(odd) {
    margin-right: 20px;
  }
  
  .second-row {
    margin: 0;
    .story-posted-time {
      color: ${({ theme }) => theme.text};
      font-size: 12px;
    }
  }
  
  .mid-line {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.highLight};
    width: 100%;
    bottom: 0;
    position: absolute;
    left: 0;
    background: ${({ theme }) => theme.highLight};
    height: 10px;
    margin: 0;
    border-bottom-right-radius: 30px;
    /* &:after {
      content: '';
      position: absolute;
      border-bottom: 1px solid ${({ theme }) => theme.highLight};
      width: 100vw;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      top: 50%;
      z-index: 0;
    } */
  }
  
  &:hover {
    transform: translateY(-10px);
    transition: 0.20s;
  }
  
  .heading {
    color: ${({ theme }) => theme.highLight};
    font-family: ${props => props.theme.fontFamilyRegular};
    font-size: 20px;
    margin-bottom: 0;
  }
  
  .news-type {
    color: ${({ theme }) => theme.text};
    font-family: ${props => props.theme.fontFamilyRegular};
  }
  
  .submitted-name {
    text-align: end;
    color: ${({ theme }) => theme.text};
    font-family: ${props => props.theme.fontFamilyRegular};
    span {
      color: ${({ theme }) => theme.highLight};
    }
  }
}` 
