import React from "react" 
import { Home, Botones, ComponentesUX } from '../pages/pages'
import { ellipsisHorizontalCircleSharp, homeSharp, appsSharp } from 'ionicons/icons';


interface RoutesTypes {
    title: string,
    url: string,
    component: React.FC,
    icon: string
}

export const MenuPages: RoutesTypes[] = [
    {
        title: 'Home',
        url: '/home',
        component: Home,
        icon: homeSharp
    }, 
    {
        title: 'Botones',
        url: '/botones',
        component: Botones,
        icon: ellipsisHorizontalCircleSharp
    },
    {
        title: 'Componentes UX',
        url: '/UXComponents',
        component: ComponentesUX,
        icon: appsSharp
    }
]
