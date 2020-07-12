import React from "react";
import PropTypes from "prop-types";
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledFilter } from './Filter.style';

const Filter = ({theme, themeToggler, className}) => {
  
  return (
    <StyledFilter>
      <div className={`container ${className}`}>
        filteer
      </div>
    </StyledFilter>
  )
};

Filter.propTypes = {};

Filter.defaultProps = {};

export default withStyles(Filter, styles);

export { Filter as FilterVanilla };