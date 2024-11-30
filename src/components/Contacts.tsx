import React, { useRef, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonModal,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
} from '@ionic/react';
import { motion, AnimatePresence } from 'framer-motion';
import { contacts } from '../utils/contacts';

const Contact: React.FC = () => { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLIonModalElement>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <IonContent>
      {/* Button to open modal */}
      <IonButton
        id="open-modal"
        className='flex justify-center mx-auto bg-slate-400 max-w-[200px] rounded-lg'
        onClick={openModal}
        style={{ '--background': 'transparent', '--color': '#fff' }}
      >
        Open Contacts
      </IonButton>

      {/* Modal for Contact List */}
      <AnimatePresence>
        {isModalOpen && (
          <IonModal
            ref={modalRef}
            isOpen={isModalOpen}
            onDidDismiss={closeModal}
            initialBreakpoint={0.25}
            breakpoints={[0.25, 0.5, 0.75]}
            backdropDismiss={false}
            backdropBreakpoint={0.5}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <IonContent className="ion-padding">
                <IonSearchbar
                  onClick={() => modalRef.current?.setCurrentBreakpoint(0.75)}
                  placeholder="Search"
                ></IonSearchbar>

                {/* Contact List */}
                <IonList>
                    {contacts.map(({name, position, avatar}) => ( 
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonImg src={avatar} />
                        </IonAvatar>
                        <IonLabel>
                            <h2>{name}h</h2>
                            <p>{position}</p>
                        </IonLabel>
                    </IonItem>
                    ))}
                </IonList>
              </IonContent>
            </motion.div>
          </IonModal>
        )}
      </AnimatePresence>
    </IonContent>
  );
};

export default Contact;
