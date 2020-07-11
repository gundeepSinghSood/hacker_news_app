/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { MAX_STORIES, INITIAL_STORY_LOAD } from './config';
import { debounce } from '../util/debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(INITIAL_STORY_LOAD);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    if (count + INITIAL_STORY_LOAD >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + INITIAL_STORY_LOAD);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};