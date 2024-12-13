import React from "react" 
import { Home, Botones, ComponentesUX, MenuUx, Charts, Perritos, Restaurant } from '../pages/pages'
import { ellipsisHorizontalCircleSharp, homeSharp, appsSharp, menuSharp, statsChartSharp, pawSharp, restaurantSharp  } from 'ionicons/icons';


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
    },
    {
        title: 'Menu',
        url: '/MenuUx',
        component: MenuUx,
        icon: menuSharp
    },
    {
        title: 'Graficas',
        url: '/Charts',
        component: Charts,
        icon: statsChartSharp
    },
    {
        title: 'Perritos',
        url: '/Perritos',
        component: Perritos,
        icon: pawSharp
    },
    {
        title: 'Restaurante',
        url: '/Restaurant',
        component: Restaurant,
        icon: restaurantSharp
    }
]
