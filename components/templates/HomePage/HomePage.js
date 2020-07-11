import React, { useState, useEffect } from 'react';
import { dataFetcher } from '../../util/dataFetcher';
import { API_DOMAIN, TOP_STORIES } from '../../util/config/env.json';
import Anchor from '../../atoms/Anchor';

const HomePage = () => {
  
  useEffect(() => {
    const topStoriesApi = `${API_DOMAIN}${TOP_STORIES}`;
    // dataFetcher(topStoriesApi).then(res=> {
    //   console.log(res)
    // })
  }, []);
  
  return (
    <Anchor to={'about'} title={'About1'}>HomePage</Anchor>
  )
}
 
export default HomePage;