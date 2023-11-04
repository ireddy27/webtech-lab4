import { Component, Input } from '@angular/core';
import { Hotellocation } from '../hotellocation';

@Component({
  selector: 'app-hotellocation',
  template: `<section class="listing">
  <ng-content></ng-content>
  </section>`,
  styleUrls: ['./hotellocation.component.css']
})
export class HotellocationComponent {
  @Input() hotellocation!: Hotellocation;
}
