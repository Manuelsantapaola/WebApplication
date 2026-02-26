import {Routes} from '@angular/router';
import {Divani} from './divani/divani';
import {Materassi} from './materassi/materassi';
import { Letti } from './letti/letti';
import { Cuscini } from './cuscini/cuscini';
import { Poltrone } from './poltrone/poltrone';

import { Homepage } from './homepage/homepage';


const routeConfig: Routes = [
    {path:"",
     component :Homepage,
     title:'homepage'
    },

    {
        path: 'divani',
        component: Divani,
        title: 'divani',
    },
    {
        path: 'materassi',
        component: Materassi,
        title: 'materassi',
    },
    {
        path: 'letti',
        component: Letti,
        title: 'letti',
    },
    {
        path: 'cuscini',
        component: Cuscini,
        title: 'cuscini',
    },
    {
        path: 'poltrone',
        component: Poltrone,
        title: 'poltrone',
    },

];
export default routeConfig;