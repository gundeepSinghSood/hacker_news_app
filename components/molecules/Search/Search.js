import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledSearch } from './Search.style';
import { isMobile } from '../../../util/index';

const Search = ({className}) => {
   const searchInput = useRef();
   const buttonInput = useRef();
   
   useEffect(() => {
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    
    if (isMobile()) {
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
    }
   }, []);
  
  const searchAnimation = () => {
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  }
  
  return (
    <StyledSearch className={`${className} row end-xs col-xs-6 col-lg-4`}>
      <form id="content">
        <input type="text" name="input" class="input" placeholder={isMobile() ? 'Search' : ''} id="search-input" ref={searchInput} />
        <button type="reset" class="search" id="search-btn" onClick={!isMobile() && searchAnimation} ref={buttonInput}></button>
      </form>
    </StyledSearch>
  )
};

Search.propTypes = {};

Search.defaultProps = {};

export default withStyles(Search, styles);

export { Search as SearchVanilla };