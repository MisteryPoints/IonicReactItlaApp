import React, { useState } from 'react';
import { IonSearchbar, IonButton } from '@ionic/react';
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string, type: 'name' | 'ingredient') => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <IonSearchbar
            value={query}
            onIonChange={e => setQuery(e.detail.value!)}
            placeholder="Busca cualquier delicia..."
            className="custom-searchbar"
            onKeyUp={(e) => e.key === 'Enter' && onSearch(query, 'name')}
          />
        </div>
        <IonButton
          className="h-12 w-12 --background-transparent"
          style={{ '--background': 'transparent', '--box-shadow': 'none' }}
        >
          <Filter className="w-6 h-6 text-white" />
        </IonButton>
      </div>
    </motion.div>
  );
};