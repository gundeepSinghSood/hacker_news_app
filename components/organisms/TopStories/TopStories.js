import React, { useState, useEffect } from 'react';
import Story from '../../molecules/Story/Story';
import { useInfiniteScroll } from '../../../util/useInfiniteScroll';
import { getSingleStory } from '../../../services/hackerNewsApi';

const TopStories = ({storyIds}) => {
  const { count } = useInfiniteScroll();
  const [apiData, setApiData] = useState({})
   
  useEffect(() => {
    async function getTopStories() {
      console.log(storyIds)
      try {
        const promises = storyIds
          .map(id =>
            getSingleStory(id).then(
              response => response
            )
          );
        const result = await Promise.all(promises);
        setApiData(result)
      } catch (err) {
        console.error(err);
      }
    }
    if(!localStorage.getItem('hackerNewsApiData')) {
        getTopStories();
    }
  }, [storyIds]);
  
  useEffect(() => {
    apiData.length && localStorage.setItem('hackerNewsApiData', JSON.stringify(apiData));
  }, [apiData]);
  
  
  // 1st load 0 - 30
  // 2nd load 0 - 60
  return (
    <div className="row">
    {storyIds.slice(0, count).map(storyId => {
      return <Story key={storyId} storyId={storyId}/>
    })}
  </div>
  )
}
 
export default TopStories;