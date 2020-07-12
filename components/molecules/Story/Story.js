import React, { useState, useEffect, memo } from 'react';
import { getSingleStory } from '../../../services/hackerNewsApi';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { StyledStory } from './Story.style';
import Anchor from '../../atoms/Anchor'
import { mapTime } from '../../../util'

const Story = memo(function Story({storyId}) {
  const [storyData, setStoryData] = useState({});
  
  useEffect(() => {
    // to={storyData.url} title={storyData.title}
    console.log(storyData.url)
    getSingleStory(storyId).then(storyData => storyData && storyData.url && setStoryData(storyData))
  }, []);
  
  
  return storyData && storyData.url
    ? (
      <StyledStory className="col-xs-12 col-lg-5">
        <Anchor forceClick={true} href={storyData.url} title={storyData.title} target="_blank">
          <p className="heading">{storyData.title}</p>
          <div className="second-row row middle-xs between-xs">
            <p className="news-type">{`News Type: ${storyData.type}`}</p>
            <span className="story-posted-time">{mapTime(storyData.time)}</span>
          </div>
          <p className="submitted-name">{`Submitted By: `}<span>{`${storyData.by}`}</span></p>
        </Anchor>
        <hr className="mid-line" />
      </StyledStory>
    )
    : null
});
 
export default withStyles(Story, styles);

export { Story as StoryVanilla };