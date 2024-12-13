import axios from 'axios';
import { Meal, Category, Ingredient } from '../../utils/types/meals'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchMealsByName = async (name: string) => {
  const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
  return response.data.meals as Meal[];
};

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/list.php?c=list`);
  return response.data.meals as Category[];
};

export const getIngredients = async () => {
  const response = await axios.get(`${BASE_URL}/list.php?i=list`);
  return response.data.meals as Ingredient[];
};

export const getRandomMeal = async () => {
  const response = await axios.get(`${BASE_URL}/random.php`);
  return response.data.meals[0] as Meal;
};