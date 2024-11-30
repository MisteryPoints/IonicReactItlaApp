import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Menu from '../components/Menu';

const Perritos: React.FC = () => {
  const [dogImages, setDogImages] = useState<{ url: string; description: string }[]>([]);  
  const [loading, setLoading] = useState(false); 

  const fetchImages = async () => {
    setLoading(true);
    try {
      const responses = await Promise.all(
        Array.from({ length: 15 }).map(() =>
          axios.get('https://dog.ceo/api/breeds/image/random')
        )
      );

      const newImages = responses.map((res) => ({
        url: res.data.message,
        description: generateRandomDescription(),  
      }));

      setDogImages((prevImages) => [...prevImages, ...newImages]);  
    } catch (error) {
      console.error('Error buscando más imágenes:', error);
    } finally {
      setLoading(false);
    }
  };
 
  React.useEffect(() => {
    fetchImages();
  }, []);
 
  const handleInfiniteScroll = async (event: CustomEvent<void>) => {
    await fetchImages();
    (event.target as HTMLIonInfiniteScrollElement).complete();
  }; 

  const generateRandomDescription = () => {
    const descriptions = [
      'Perrito Lindo',
      'Perrito Juguetón',
      'Compañero Leal',
      'Amigo Peludo',
      'Movedor de Colita',
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  return (
    <>  
      <Menu contentId="perritos" />
      <IonPage id='perritos'>
        <IonHeader>
          <IonToolbar>  
            <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons> 
            <IonTitle className='w-full flex text-center font-semibold text-3xl'>
              Perritos
            </IonTitle>
          </IonToolbar>
        </IonHeader> 
        <IonContent>
          <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl font-bold mb-6">🐶 Scrollea y Disfruta de Perritos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dogImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="rounded overflow-hidden shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <IonCard>
                    <img
                      src={image.url}
                      alt="Dog"
                      className="object-cover w-full h-auto flex justify-center"
                    />
                    <IonCardHeader>
                      <IonCardTitle className="text-center">
                        {image.description}
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="text-center">
                      Este perrito es único en su tipo! 🐾
                    </IonCardContent>
                  </IonCard>
                </motion.div>
              ))}
            </div>
            {/* IonInfiniteScroll for infinite loading */}
            <IonInfiniteScroll
              onIonInfinite={handleInfiniteScroll}
              threshold="1200px"
            >
              <IonInfiniteScrollContent
                loadingSpinner="dots"
                loadingText="Cargando más perritos..."
              />
            </IonInfiniteScroll>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Perritos;
