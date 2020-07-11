import React, { useState, useEffect } from 'react';
import Story from '../../molecules/Story/Story';
import { useInfiniteScroll } from '../../../util/useInfiniteScroll';

const TopStories = ({storyIds}) => {
  const { count } = useInfiniteScroll();
  
  useEffect(() => {
    console.log("TopStories -> count", count)
  }, [count]);
  
  
  // 1st load 0 - 30
  // 2nd load 0 - 60
  return storyIds.slice(0, count ).map(storyId => {
    return <Story key={storyId} storyId={storyId}/>
  })
}
 
export default TopStories;