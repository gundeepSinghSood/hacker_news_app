import React, { useState, useEffect, memo } from 'react';
import { getSingleStory } from '../../../services/hackerNewsApi';

const Story = memo(function Story({storyId }) {
  const [storyData, setStoryData] = useState({});
  
  useEffect(() => {
    getSingleStory(storyId).then(storyData => storyData && storyData.url && setStoryData(storyData))
  }, []);
  
  
  return storyData && storyData.url
    ? (
      <div>
        <p>{storyData.title}</p>
      </div>
    )
    : null
});
 
export default Story;