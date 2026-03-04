import { Component } from '@angular/core';
import { images } from '../models/gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgs = images;
}
