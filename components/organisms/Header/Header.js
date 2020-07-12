import React from "react";
import PropTypes from "prop-types";
import ThemeToggler from '../ThemeToggler';
import Search from '../../molecules/Search';
// import Filter from '../../molecules/Filter';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledHeader } from './Header.style';

const Header = ({theme, themeToggler, className}) => {
  
  return (
    <StyledHeader>
      <div className={`container ${className}`}>
        <div className="row middle-xs between-xs header-container">
          <h1 className="header-logo row end-xs col-lg-2 is-mobile">Top News</h1>
          <div className="row end-xs col-xs-12 col-lg-10">
            <Search />
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          </div>
          {/* <Filter /> */}
        </div>
      </div>
    </StyledHeader>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default withStyles(Header, styles);

export { Header as HeaderVanilla };