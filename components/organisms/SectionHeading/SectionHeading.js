import React from "react";
import PropTypes from "prop-types";

const SectionHeading = ({sectionTitle, sectionPara}) => {
  
  return (
    <>
      <h1>{sectionTitle}</h1>
      <p>{sectionPara}</p>
    </>
  )
};

SectionHeading.propTypes = {};

SectionHeading.defaultProps = {
  sectionTitle: 'Heading',
  sectionPara: 'Some of top trending news on stories from the world news channels'
};

export default SectionHeading;