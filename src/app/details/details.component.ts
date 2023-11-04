import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelingService } from '../hoteling.service';
import { Hotellocation } from '../hotellocation';

@Component({
  selector: 'app-details',
  template: `
    <article>
      <ng-container *ngIf="hotellocation">
        <app-hotellocation [hotellocation]="hotellocation">
          <img class="listing-photo" [src]="hotellocation.photo" alt="Exterior photo of {{hotellocation.name}}"/>
          <section class="listing-description">
            <h2 class="listing-heading">{{hotellocation.name}}</h2>
            <p class="listing-location">{{hotellocation.city}}, {{hotellocation.state}}</p>
          </section>
          <section class="listing-features">
            <h2 class="section-heading">About this housing location</h2>
            <ul>
              <li>Units available: {{hotellocation.availablerooms}}</li>
              <li>Does this location have wifi: {{hotellocation.wifi}}</li>
              <li>Does this location have laundry: {{hotellocation.laundry}}</li>
            </ul>
          </section>
        </app-hotellocation>
      </ng-container>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  hotellocation: Hotellocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private hotelingservice: HotelingService
  ) {}

  ngOnInit(): void {
    const hotelingLocationId = Number(this.route.snapshot.params['id']);
    this.hotellocation = this.hotelingservice.getHotellocationById(hotelingLocationId);
  }
}