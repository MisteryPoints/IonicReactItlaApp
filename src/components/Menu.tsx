import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuButton, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { MenuPages } from '../routes/routes';
import { personCircleSharp } from 'ionicons/icons';


type MenuProps = {
    contentId: string;
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {

  return (  
    <IonMenu type={'push'} contentId={props.contentId} side='end'>
        <IonHeader>
            <IonToolbar className='w-full flex items-center justify-center'>
                <IonIcon icon={personCircleSharp} slot='start' className='pl-6 text-5xl'/>
                <IonTitle className='text-left font-semibold text-2xl'>
                    Víctor Tejada
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonMenuToggle>
                {MenuPages.map(pages => (
                    <IonItem key={pages.title} routerLink={pages.url} routerDirection='root' className='w-full flex'>
                        <IonIcon icon={pages.icon} className='text-cyan-500 pr-4'></IonIcon>
                        <IonLabel>{pages.title}</IonLabel>
                    </IonItem>
                ))}
            </IonMenuToggle>
        </IonContent>
    </IonMenu>  
  )
}

export default Menu;