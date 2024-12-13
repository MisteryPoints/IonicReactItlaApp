import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, Users } from 'lucide-react';
import type { Meal } from '../utils/types/meals';
import { Star } from 'lucide-react';

interface MealCardProps {
  meal: Meal;
  onClick: (meal: Meal) => void;
}

export const MealCard: React.FC<MealCardProps> = ({ meal, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="w-full cursor-pointer"
      onClick={() => onClick(meal)}
    >
      <div className="meal-card">
        <div className="relative">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-lg font-bold text-white">{meal.strMeal}</h3>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
                />
              ))}
              <span className="ml-1 text-sm text-white">4.0</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>25-35 min</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4" />
              <span>400 kcal</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>4 porciones</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};