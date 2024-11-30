import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonToast,
  IonAlert,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/react';
import { motion } from 'framer-motion';
import { bag, bus, cash, film, cart, apps } from 'ionicons/icons';
import Menu from '../components/Menu';

const MenuUx: React.FC = () => {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showEditAlert, setShowEditAlert] = useState(false);
  const [newName, setNewName] = useState<string | null>(null);

  const categories = [
    { name: 'General', icon: apps, color: '#60A5FA' },
    { name: 'Transporte', icon: bus, color: '#A78BFA' },
    { name: 'Compras', icon: bag, color: '#F43F5E' },
    { name: 'Cuentas', icon: cash, color: '#F59E0B' },
    { name: 'Entretenimiento', icon: film, color: '#3B82F6' },
    { name: 'Mercado', icon: cart, color: '#10B981' },
  ];

  // Motion Variants for Animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const handleSave = () => {
    setShowSuccessToast(true);
  };

  const handleDeleteAccount = () => {
    setShowDeleteAlert(true);
  };

  const handleEditName = () => {
    setShowEditAlert(true);
  };

  const handleFormError = () => {
    setShowErrorToast(true);
  };

  return (
    <>
      <Menu contentId='menu-ux' />
      <IonPage id='menu-ux'>
        <IonHeader>
          <IonToolbar>  
            <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons> 
            <IonTitle className='w-full flex text-center font-semibold text-3xl'>
              Menu UX
            </IonTitle>
          </IonToolbar>
        </IonHeader> 
        <IonContent
          fullscreen 
          style={{
            background:
              'linear-gradient(180deg, rgba(20,22,41,1) 10%, rgba(255,100,128,1) 70%)',
            color: 'white',
            '--background': '#ffffff0',
            '--color': '#fff',
            shadow: 100,
          }}
        >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            padding: '20px',
            color: 'white',
          }}
        >
            <h1 className='text-4xl font-semibold'>Bienvenido {newName}</h1>
          <h2 className='text-3xl font-semibold'>Transacciones</h2>
          <p className='text-lg opacity-80'>
            Selecciona la Transacción de tu interés
          </p>
        </motion.div>

        {/* Grid for Categories */}
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            {categories.map((category, index) => (
              <IonCol size="6" key={index} className="ion-text-center">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="category-card p-[20px] rounded-xl bg-[#1F1F38]/80 hover:bg-[#1F1F38]"
                  style={{
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    '--background': '#ffffff0',
                    '--color': '#fff',
                    shadow: '100',
                  }}
                >
                  <IonIcon
                    icon={category.icon}
                    style={{
                      fontSize: '40px',
                      color: category.color,
                      marginBottom: '10px',
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: '500',
                      color: 'white',
                    }}
                  >
                    {category.name}
                  </p>
                </motion.div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        
        {newName ? '' : (
            <p className='w-full text-center pt-10 font-semibold text-cyan-500 text-xl cursor-none'>
                Favor Ingresar tu nombre
            </p>)}

        {/* Actions Section */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <IonButton onClick={handleSave} className="ion-margin">Guardar</IonButton>
          <IonButton color="danger" onClick={handleDeleteAccount} className="ion-margin">Eliminar cuenta</IonButton>
          <IonButton onClick={handleEditName} className="ion-margin">Editar Nombre</IonButton>
          <IonButton onClick={handleFormError} className="ion-margin">Enviar Formulario</IonButton>
        </div>

        {/* Toasts */}
        <IonToast
          isOpen={showSuccessToast}
          onDidDismiss={() => setShowSuccessToast(false)}
          message="Datos guardados exitosamente"
          duration={3000}
          color="success"
        />

        <IonToast
          isOpen={showErrorToast}
          onDidDismiss={() => setShowErrorToast(false)}
          message="Por favor, completa todos los campos"
          color="danger"
          buttons={[{ text: 'Cerrar', role: 'cancel' }]}
        />

        {/* Alerts */}
        <IonAlert
          isOpen={showDeleteAlert}
          onDidDismiss={() => setShowDeleteAlert(false)}
          header="Confirmación"
          message="¿Estás seguro de que deseas eliminar tu cuenta?"
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
            },
            {
              text: 'Eliminar',
              role: 'destructive',
              handler: () => {
                console.log('Cuenta eliminada');
              },
            },
          ]}
        />

        <IonAlert
          isOpen={showEditAlert}
          onDidDismiss={() => setShowEditAlert(false)}
          header="Editar Nombre"
          inputs={[
            {
              name: 'name',
              type: 'text',
              placeholder: 'Escribe un nuevo nombre',
            },
          ]}
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
            },
            {
              text: 'Guardar',
              handler: (data) => {
                setNewName(data.name);
                console.log('Nuevo nombre:', data.name);
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
    </>  
  );
};

export default MenuUx;
