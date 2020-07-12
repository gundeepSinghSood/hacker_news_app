import { createGlobalStyle} from "styled-components"
import modernNormalize from "@styled/modern-normalize";


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BalooDa-Regular, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  
  main {
    margin-top: 7rem;
  }
  
  @font-face {
    font-family: 'BalooDa-Regular';
    src: url('/fonts/BalooDa2-Regular.ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
    @font-face {
    font-family: 'BalooDa-Bold';
    src: url('/fonts/BalooDa2-Bold.ttf');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  
  @media only screen and (max-width : 640px) {
    .is-mobile {
      display: none;
    }
  }
  
  ${modernNormalize}
  
  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${100}ms, transform ${100}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${100}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${100}ms;
  }
  `
