import React from "react";
import PropTypes from "prop-types";
import ThemeToggler from '../ThemeToggler';
// import Search from '../../molecules/Search';
// import Filter from '../../molecules/Filter';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledHeader } from './Header.style';

const Header = ({theme, themeToggler, className}) => {
  
  return (
    <StyledHeader>
      <div className={`container ${className}`}>
        <div className="row middle-xs between-xs header-container">
          <h1 className="header-logo">Top News</h1>
          {/* <Search /> */}
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
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