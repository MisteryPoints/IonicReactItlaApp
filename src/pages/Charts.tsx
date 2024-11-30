import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'; 
import Menu from '../components/Menu'; 
import Chart from '../components/BarChart';

const Charts: React.FC = () => {
  return (
    <>
      <Menu contentId='graficas' />
      <IonPage id='graficas'>
        <IonHeader>
          <IonToolbar>  
            <IonButtons slot="end">
                <IonMenuButton></IonMenuButton>
            </IonButtons> 
            <IonTitle className='w-full flex text-center font-semibold text-3xl'>
              Graficas
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>  
            <Chart />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Charts;
