import type { Meal } from '../utils/types/meals';

export interface Ingredient {
  ingredient: string;
  measure: string;
}

export const getIngredientsList = (meal: Meal): Ingredient[] => {
  const ingredients: Ingredient[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof Meal];
    const measure = meal[`strMeasure${i}` as keyof Meal];
    
    if (ingredient && measure && ingredient.trim() !== '' && measure.trim() !== '') {
      ingredients.push({
        ingredient: ingredient,
        measure: measure
      });
    }
  }
  
  return ingredients;
};