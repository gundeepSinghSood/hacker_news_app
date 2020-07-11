import React, { useState, useEffect } from 'react';
import Anchor from '../../atoms/Anchor';
import { getToStoriesID } from '../../../services/hackerNewsApi';
import TopStories from '../../organisms/TopStories/TopStories';
import SectionHeading from '../../organisms/SectionHeading';

const HomePage = () => {
  const [storyIds, setStoryIds] = useState([]);
  
  
  useEffect(() => {
    getToStoriesID().then(ids => {
      setStoryIds(ids)
    })
  }, []);
  
  return (
    <>
      <SectionHeading sectionTitle='Top News' sectionPara='Some of top trending news on stories from the Hacker News API' />
      <TopStories storyIds={storyIds} />
    </>
  )
}
 
export default HomePage;