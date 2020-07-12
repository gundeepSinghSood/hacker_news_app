import React from "react";
import PropTypes from "prop-types";
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledAutoSuggestion } from './AutoSuggestion.style';
import Anchor from '../../atoms/Anchor'

const AutoSuggestion = ({suggestionData, className}) => {
  
  return (
    <StyledAutoSuggestion className={`${className} auto-suggest-container`}>
    {suggestionData.length
      ? suggestionData.map(item => (
      <Anchor forceClick={true} href={item.url} title={item.title} target="_blank">
        <p>{item.title}</p>
      </Anchor>
    ))
      : <div>No Result</div>}
    </StyledAutoSuggestion>
  )
};

AutoSuggestion.propTypes = {};

AutoSuggestion.defaultProps = {};

export default withStyles(AutoSuggestion, styles);

export { AutoSuggestion as AutoSuggestionVanilla };