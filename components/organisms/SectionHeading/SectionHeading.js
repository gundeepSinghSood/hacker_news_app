import React from "react";
import PropTypes from "prop-types";
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledHeading } from './SectionHeading.style';

const SectionHeading = ({sectionTitle, sectionPara}) => {
  
  return (
    <StyledHeading>
      <h1>{sectionTitle}</h1>
      <p>{sectionPara}</p>
    </StyledHeading>
  )
};

SectionHeading.propTypes = {};

SectionHeading.defaultProps = {
  sectionTitle: 'Heading',
  sectionPara: 'Some of top trending news on stories from the world news channels'
};

export default withStyles(SectionHeading, styles);

export { SectionHeading as SectionHeadingVanilla };