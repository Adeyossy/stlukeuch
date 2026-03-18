import { Component, Input } from '@angular/core';
import { CarouselImage } from 'src/app/models/gallery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() imgs: CarouselImage[] = [];
  @Input() title = "";
  @Input() subtitle = "";
}
