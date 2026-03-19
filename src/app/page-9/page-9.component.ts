import { Component } from '@angular/core';
import { images } from '../models/gallery';

@Component({
  selector: 'app-page-9',
  templateUrl: './page-9.component.html',
  styleUrls: ['./page-9.component.css']
})
export class Page9Component {
  imgs = images.slice(1, 2);
}
