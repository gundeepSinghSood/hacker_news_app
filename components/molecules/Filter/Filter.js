import React, { useState } from 'react';
import PropTypes from "prop-types";
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledFilter } from './Filter.style';

const Filter = props => {
  return (
    <Filter className="col-lg-4">
      <i className="fa fa-filter" aria-hidden="true"></i>
    </Filter>
  )
};

Filter.propTypes = {};

Filter.defaultProps = {};

export default Filter;