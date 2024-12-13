import React from 'react';
import { IonModal, IonContent, IonButton } from '@ionic/react';
import { X, Clock, Flame, Users, VideoIcon as Youtube } from 'lucide-react';
import type { Meal } from '../utils/types/meals';
import { getIngredientsList } from '../utils/mealsUtils';

interface MealModalProps {
  meal: Meal | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MealModal: React.FC<MealModalProps> = ({ meal, isOpen, onClose }) => {
  if (!meal) return null;

  const ingredients = getIngredientsList(meal);

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="modal-card">
      <div className="bg-[#1a1a1a] min-h-screen">
        <div className="relative">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h2 className="text-2xl font-bold text-white mb-2">{meal.strMeal}</h2>
            <div className="flex gap-4 text-white/80 text-sm">
              <span>{meal.strCategory}</span>
              <span>•</span>
              <span>{meal.strArea}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-[#2a2a2a] p-4 rounded-lg text-center">
              <Clock className="w-5 h-5 mx-auto mb-2 text-yellow-400" />
              <p className="text-sm text-gray-300">25-35 min</p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg text-center">
              <Flame className="w-5 h-5 mx-auto mb-2 text-yellow-400" />
              <p className="text-sm text-gray-300">400 kcal</p>
            </div>
            <div className="bg-[#2a2a2a] p-4 rounded-lg text-center">
              <Users className="w-5 h-5 mx-auto mb-2 text-yellow-400" />
              <p className="text-sm text-gray-300">4 porciones</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Ingredientes</h3>
            <div className="grid grid-cols-1 gap-3">
              {ingredients.map((ing, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#2a2a2a] p-3 rounded-lg"
                >
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${ing.ingredient}.png`}
                    alt={ing.ingredient}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="text-white">{ing.ingredient}</p>
                    <p className="text-sm text-gray-400">{ing.measure}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Instrucciones</h3>
            <p className="text-gray-300 leading-relaxed">{meal.strInstructions}</p>
          </div>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 px-6 rounded-lg w-full"
            >
              <Youtube className="w-5 h-5" />
              Ver video tutorial
            </a>
          )}
        </div>
      </div>
    </IonModal>
  );
};