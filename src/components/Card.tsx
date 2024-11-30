import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal } from '@ionic/react';
import { motion, AnimatePresence } from 'framer-motion';
import MyBG from '../public/mybg.jpg';

const Card: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Card Component with Shared layoutId */}
      <AnimatePresence>
        {!isModalOpen && (
          <motion.div layoutId="card" className="relative">
            <IonCard className="shadow-lg rounded-lg overflow-hidden">
              <img alt="Silhouette of mountains" src={MyBG} className="w-full h-auto" />
              <IonCardHeader>
                <IonCardTitle>Templo Fukushima</IonCardTitle>
                <IonCardSubtitle>PixelArt</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Esto es un templo sagrado en el que habitaron muchos sabios.
                <IonButton
                  expand="block"
                  onClick={openModal}
                  className="bg-red-500 text-white w-full h-10 rounded mt-4"
                  style={{ '--background': 'transparent', '--color': '#fff' }}
                >
                  Ver más
                </IonButton>
              </IonCardContent>
            </IonCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Component with Shared layoutId */}
      <IonModal isOpen={isModalOpen} onDidDismiss={closeModal} showBackdrop={false}>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              layoutId="card"
              className="fixed inset-0 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <IonCard className="shadow-lg rounded-lg overflow-hidden relative max-w-lg w-full">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  style={{ fontSize: '1.5rem' }}
                >
                  &times;
                </button>

                <img alt="Silhouette of mountains" src={MyBG} className="w-full h-auto" />
                <IonCardHeader>
                  <IonCardTitle>Templo Fukushima</IonCardTitle>
                  <IonCardSubtitle>PixelArt</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  Esto es un templo sagrado en el que habitaron muchos sabios.
                </IonCardContent>
              </IonCard>
            </motion.div>
          )}
        </AnimatePresence>
      </IonModal>
    </div>
  );
};

export default Card;
