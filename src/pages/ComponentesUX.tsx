import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from '../components/Menu';

const ComponentesUX: React.FC = () => {
  return (
    <>
      <Menu contentId='components' />
      <IonPage id='components'>
        <IonHeader>
          <IonToolbar>  
            <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons> 
            <IonTitle className='w-full flex text-center font-semibold text-3xl'>
              UX Componentes
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen> 
          <ExploreContainer />
        </IonContent>
      </IonPage>
    </>
  );
};

export default ComponentesUX;
