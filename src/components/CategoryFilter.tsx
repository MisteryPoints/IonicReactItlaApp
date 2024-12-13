import React, { useEffect, useState, useRef } from 'react';
import { IonChip, IonLabel } from '@ionic/react';
import { motion } from 'framer-motion';
import { getCategories } from '../routes/services/api';
import type { Category } from '../utils/types/meals';
import { useDrag } from '../hooks/useDrag';

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } = useDrag(containerRef);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full py-4"
    >
      <div 
        ref={containerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x cursor-grab"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMove}
      >
        {[...categories.map(c => c.strCategory)].map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="snap-start"
          >
            <IonChip
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <IonLabel className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
                {category}
              </IonLabel>
            </IonChip>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};