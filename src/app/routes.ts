import { Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HotelComponent,
      title: 'Hotel page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Hotel details'
    }
  ];
  
  export default routeConfig;