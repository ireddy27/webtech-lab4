import { Component,inject } from '@angular/core';
import { Hotellocation } from '../hotellocation';
import { HotelingService } from '../hoteling.service';
@Component({
selector: 'app-hotel',
template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
    <section class="listing">
    <div class="listing-item" *ngFor="let hotellocation of hotellocation">
    <a [routerLink]="['/hotel', hotellocation.id]">Learn more</a>
      <div class="hotel-content">
        <img class="listing-photo" [src]="hotellocation.photo" [alt]="hotellocation.name">
        <h2 class="listing-heading">{{ hotellocation.name }}</h2>
        <p class="listing-location">{{ hotellocation.city }}, {{ hotellocation.state }}</p>
      </div>
    </div>
  </section>
  </section>
  
  `,
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  hotellocation: Hotellocation[] = [];
  hotelingService: HotelingService = inject(HotelingService);

  constructor() {
    this.hotellocation= this.hotelingService.getAllHotellocations();
}
}
