export interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    [key: string]: string | null;
  }
  
  export interface Category {
    strCategory: string;
  }
  
  export interface Ingredient {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
  }