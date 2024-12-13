import { useEffect, useState } from 'react';
import { Meal } from '../utils/types/meals';
import { getRandomMeal } from '../routes/services/api';

export const useInfiniteScroll = (initialMeals: Meal[] = []) => {
  const [meals, setMeals] = useState<Meal[]>(initialMeals);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreMeals = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newMeals = await Promise.all(
        Array(6).fill(null).map(() => getRandomMeal())
      );
      
      setMeals(prev => [...prev, ...newMeals]);
      setHasMore(newMeals.length > 0);
    } catch (error) {
      console.error('Error loading more meals:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight) {
      loadMoreMeals();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return {
    meals,
    setMeals,
    loading,
    hasMore,
    loadMoreMeals
  };
};