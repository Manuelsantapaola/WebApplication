import {Routes} from '@angular/router';
import {Divani} from './divani/divani';
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
];
export default routeConfig;