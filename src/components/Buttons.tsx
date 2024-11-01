import React from 'react';
import { IonContent, IonList, IonButton } from '@ionic/react';
import { motion } from 'framer-motion';

const colors: string[] = [
  'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
  'bg-red-500', 'bg-purple-500', 'bg-pink-500',
  'bg-indigo-500', 'bg-teal-500', 'bg-gray-500',
  'bg-orange-500', 'bg-lime-500', 'bg-rose-500',
  'bg-cyan-500', 'bg-emerald-500', 'bg-sky-500',
  'bg-fuchsia-500', 'bg-violet-500', 'bg-stone-500',
  'bg-neutral-500', 'bg-zinc-500'
];

const ButtonList: React.FC = () => {
  const MotionButton = motion(IonButton);
  const MotionList = motion(IonList);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  } 

  return ( 
    <IonContent>
      <MotionList  className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {colors.map((color, index) => (
          <MotionButton
            key={index}
            className={`${color} text-white w-full h-10 rounded`}
            expand="full"
            style={{ '--background': 'transparent', '--color': '#fff' }}
            variants={itemVariants}
          >
            Botón {index + 1}
          </MotionButton>
        ))}
      </MotionList>
    </IonContent> 
  );
};

export default ButtonList;
