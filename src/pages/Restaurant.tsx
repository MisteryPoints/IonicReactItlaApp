import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonInfiniteScroll, IonInfiniteScrollContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { UtensilsCrossed } from 'lucide-react';
import { SearchBar } from './../components/SearchBar';
import { CategoryFilter } from './../components/CategoryFilter';
import { MealCard } from './../components/MealCard';
import { MealModal } from './../components/MealModal';
import { searchMealsByName, getRandomMeal } from './../routes/services/api';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import type { Meal } from '../utils/types/meals'
import Menu from "../components/Menu";
import translate from 'google-translate-api-browser';

const RestaurantPage: React.FC = () => {
    const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
    const { meals, setMeals, loading, hasMore, loadMoreMeals } = useInfiniteScroll([]);
  
    const handleSearch = async (query: string, type: 'name' | 'ingredient') => {
      try {
        const results = await searchMealsByName(query);
        setMeals(results || []);
      } catch (error) {
        console.error('Error al buscar recetas:', error);
      }
    };
  
    const handleCategorySelect = async (category: string) => {
      try {
        const results = await searchMealsByName(category);
        setMeals(results || []);
      } catch (error) {
        console.error('Error al filtrar por categoría:', error);
      }
    };

    useEffect(() => {
        if(meals.length > 0) return; 
        loadMoreMeals();
    }, [])

  return ( 
    <>
    <Menu contentId='restaurant' />
        <IonPage id='restaurant'>
            <IonHeader>
                <IonToolbar>  
                    <IonButtons slot="end">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons> 
                    <IonTitle className='w-full flex text-center font-semibold text-3xl'>
                        🍴 Restaurante Delicias Victorianas
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div className="min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-8">
                <div className="flex mx-auto items-center gap-3 select-none">
                    <UtensilsCrossed className="w-8 h-8 text-yellow-400" />
                    <h1 className="text-2xl font-bold">Cocina Saludable</h1>
                </div>
                </div>
                
                <SearchBar onSearch={handleSearch} />

                <div className="mt-8">
                <CategoryFilter onSelectCategory={handleCategorySelect} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {meals.map((meal) => (
                    <MealCard 
                    key={meal.idMeal} 
                    meal={meal} 
                    onClick={setSelectedMeal}
                    />
                ))}
                </div>

                {loading && (
                <div className="flex justify-center items-center h-24">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
                </div>
                )}

                <IonInfiniteScroll
                onIonInfinite={(ev) => {
                    loadMoreMeals();
                    ev.target.complete();
                }}
                disabled={!hasMore}
                >
                <IonInfiniteScrollContent loadingText="Cargando más recetas..." />
                </IonInfiniteScroll>
            </div>
            </div>

            <MealModal
            meal={selectedMeal}
            isOpen={!!selectedMeal}
            onClose={() => setSelectedMeal(null)}
            />
            </IonContent>
        </IonPage>
    </>
  );
};

export default RestaurantPage;
