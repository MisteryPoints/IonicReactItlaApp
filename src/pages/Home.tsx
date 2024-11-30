import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Menu from '../components/Menu';
import HomeComponent from '../components/HomeComponent';

const Home: React.FC = () => {
  return (
    <>
      <Menu contentId='principal' />
      <IonPage id='principal'>
        <IonHeader>
          <IonToolbar>  
            <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons> 
            <IonTitle className='w-full flex text-center font-semibold text-3xl'>
              ITLA React App
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen> 
          <HomeComponent />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;