import { Component, Input } from '@angular/core';
import { Section } from 'src/app/models/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() sections: Section[] = [];

  isString = (variable: string | string[]) => {
    return typeof variable === "string";
  }

  isArray = (variable: unknown) => {
    return Array.isArray(variable);
  }

  asArray = (variable: unknown): string[] => {
    if (this.isArray(variable)) return variable as string[];
    return [];
  }
}
