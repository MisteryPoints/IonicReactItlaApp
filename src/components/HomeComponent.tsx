import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react'
import { rocket, flash, cog } from 'ionicons/icons'
import { motion } from 'framer-motion'

const HomeComponent: React.FC = () =>  {
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
    <IonContent className="bg-gray-900 text-white">
        <motion.div 
            className="p-6 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="text-center space-y-4" variants={itemVariants}>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                    <motion.span 
                        className="block"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Bienvenido a mi APP del ITLA
                    </motion.span>
                    <motion.span 
                        className="block text-blue-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Hecha en React
                    </motion.span>
                </h1>
                <motion.p 
                    className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    Disfruta de la experiencia de Aplicación móvil diseñada por Víctor Tejada,
                    Ingeniero en Software, Freelancer y Analista de Datos.
                </motion.p>
                <motion.div 
                    className="mt-5 sm:mt-8 sm:flex sm:justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <IonButton 
                        className="w-full sm:w-auto text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        expand="block"
                        style={{ '--background': '#ffffff0', '--color': '#fff', shadow: 100 }}
                    >
                        Vamos
                        <IonIcon icon={rocket} slot="end" />
                    </IonButton>
                </motion.div>
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <IonCard className="bg-gray-800 border border-gray-700">
                        <IonCardHeader>
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "circInOut" }}
                            >
                                <IonIcon icon={flash} className="text-yellow-400 text-4xl mb-4" />
                            </motion.div>
                            <IonCardTitle className="text-xl font-bold">Rápido como el Rayo</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            Disfruta del rendimiento de la Tecnología de Punta con React y Ionic.
                        </IonCardContent>
                    </IonCard>
                </motion.div>

            <motion.div variants={itemVariants}>
                <IonCard className="bg-gray-800 border border-gray-700">
                    <IonCardHeader>
                        <motion.div
                            animate={{ 
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 4,
                                ease: "anticipate",
                                times: [0, 1],
                                repeat: Infinity,
                            }}
                        >
                            <IonIcon icon={cog} className="text-blue-400 text-4xl mb-4" />
                        </motion.div>
                        <IonCardTitle className="text-xl font-bold">Personaliza a tu Gusto</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Creamos la APP que necesitas, de forma flexible y con opciones de Personalización.
                    </IonCardContent>
                </IonCard>
            </motion.div>

            <motion.div variants={itemVariants}>
                <IonCard className="bg-gray-800 border border-gray-700">
                    <IonCardHeader>
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        >
                            <IonIcon icon={rocket} className="text-green-400 text-4xl mb-4" />
                        </motion.div>
                        <IonCardTitle className="text-xl font-bold">Mejora Continua</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Mantengamonos a la vanguardia de la tecnología, integrandonos a los cambios.
                    </IonCardContent>
                </IonCard>
            </motion.div>
            </motion.div>
        </motion.div>
    </IonContent> 
  )
}

export default HomeComponent;