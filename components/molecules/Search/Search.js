import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledSearch } from './Search.style';
import { isMobile } from '../../../util/index';
import AutoSuggestion from '../AutoSuggestion';

const Search = ({className}) => {
   const searchInput = useRef();
   const buttonInput = useRef();
   const [showAutoSuggest, setShowAutoSuggest] = useState(false);
   const [suggestionData, setSuggestionData] = useState([]);
   
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
    const searchBox = document.getElementById("search-container");
    const body = document.querySelector('body');
    
    if (input.classList.contains('mobile-input')) {
      input.classList.remove('mobile-input');
      searchBox.classList.remove('full-width');
      searchBox.classList.remove('col-xs-12');
      body.style.position = 'relative';
      
      setShowAutoSuggest(false);
      setSuggestionData([]);
    } else {
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
    }
  }
  
  const getSearchResult = (value) => {
    const newsDataFromLocalStorage = localStorage.getItem('hackerNewsApiData');
    const parsedData = JSON.parse(newsDataFromLocalStorage)
    const filteredData = parsedData && parsedData.filter((item) => item.title.toString().toLowerCase().indexOf(value.toLowerCase()) >= 0)
    setSuggestionData(filteredData);
    setShowAutoSuggest(true);
  }
  
  const getSuggestions = (e) => {
    const value = e.target.value;
    if (value.length) {
      getSearchResult(value);
    } else {
      setShowAutoSuggest(false);
    }
  }
  
  const triggerAnimation = () => {
    if (isMobile()) {
      const input = document.getElementById("search-input");
      const searchBox = document.getElementById("search-container");
      const body = document.querySelector('body');
      
      input.classList.add("mobile-input");
      searchBox.classList.add('full-width')
      searchBox.classList.add('col-xs-12')
      body.style.position = 'fixed';
    }
  }
  
  return (
    <StyledSearch id='search-container' className={`${className} row end-xs col-xs-6 col-lg-4`}>
      <form id="content" autocomplete="off">
        <input type="text" name="input" v="input" onFocus={triggerAnimation} onChange={getSuggestions} placeholder={isMobile() ? 'Search' : ''} id="search-input" ref={searchInput} />
        <button type="reset" className="search" id="search-btn" onClick={searchAnimation} ref={buttonInput}></button>
      </form>
      {showAutoSuggest && <AutoSuggestion suggestionData={suggestionData}/>}
    </StyledSearch>
  )
};

Search.propTypes = {};

Search.defaultProps = {};

export default withStyles(Search, styles);

export { Search as SearchVanilla };