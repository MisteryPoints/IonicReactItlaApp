import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from '../components/Menu';
import ButtonList from '../components/Buttons';

const Botones: React.FC = () => {
  return (
    <>
      <Menu contentId='botones' />
      <IonPage id='botones'>
        <IonHeader>
          <IonToolbar>  
            <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons> 
            <IonTitle className='w-full flex text-center font-semibold text-3xl'>
              Botones
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen> 
          <ButtonList />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Botones;
