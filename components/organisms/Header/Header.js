import React from "react";
import PropTypes from "prop-types";
import ThemeToggler from '../ThemeToggler';
import Search from '../../molecules/Search';
import Filter from '../../molecules/Filter';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledHeader } from './Header.style';

const Header = ({theme, themeToggler}) => {
  return (
    <StyledHeader className="container">
      <div className="row middle-xs between-xs header-container">
        <Search />
        <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        <Filter />
      </div>
    </StyledHeader>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;