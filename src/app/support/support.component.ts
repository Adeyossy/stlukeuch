import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { HEALTHCARE, STUDIES, WORK } from '../models/gallery';

type Category = "healthcare" | "studies" | "work";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  roles = {
    healthcare: {
      images: HEALTHCARE,
      components: {
        title: "Chaplancy Services",
        items: [
          {
            title: "Prayer for the sick",
            body: "Drop a request",
            link: "https://wa.me/2348066199175",
            type: "long",
            action: "Send Message"
          },
          {
            title: "Baptism on the ward",
            body: "For babies in precarious health condition.",
            link: "tel:+2348066199175",
            type: "none",
            action: "Call Parish Priest"
          },
          {
            title: "Sacrament of the annointing of the Sick",
            body: "Please call our Parish Priest.",
            link: "tel:+2348066199175",
            type: "none",
            action: "Call Parish Priest"
          },
          {
            title: "Receiving Holy Communion while on admission",
            body: "Please call our Parish Priest.",
            link: "tel:+2348066199175",
            type: "none",
            action: "Call Parish Priest"
          },
          {
            title: "Need for material support - St Vincent de Paul",
            body: "Please call our coordinators.",
            link: "tel:+2348066199175",
            type: "none",
            action: "Call Coordinator"
          }
        ]
      }
    },
    studies: {
      images: STUDIES,
      components: {
        title: "Student Apostolic and Academic support",
        items: [
          {
            title: "NFCS",
            body: "",
            link: "",
            type: "",
            action: ""
          },
          {
            title: "FECAMDS",
            body: "",
            link: "",
            type: "",
            action: ""
          },
          {
            title: "Post Graduate Student group",
            body: "",
            link: "",
            type: "",
            action: ""
          },
          {
            title: "Study groups available",
            body: "",
            link: "",
            type: "",
            action: ""
          },
        ]
      }
    },
    work: {
      images: WORK,
      components: {
        title: "Workers Apostolic support",
        items: [
          {
            title: "Health Workers Guild",
            body: "",
            link: "",
            type: "",
            action: ""
          },
          {
            title: "Guild of Catholic Nurses",
            body: "",
            link: "",
            type: "",
            action: ""
          },
          {
            title: "Catholic Physicians Guild",
            body: "",
            link: "",
            type: "",
            action: ""
          }
        ]
      }
    }
  };

  category$: Observable<Category> = of("healthcare");
  images$: Observable<Array<{ url: string, description: string }>> = of([]);
  values: { [i: string]: string } = {};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.category$ = this.activatedRoute.paramMap.pipe(
      map(paramMap => {
        const category = paramMap.get("category") as Category;
        return category ? category : "healthcare"
      })
    );

    this.images$ = this.category$.pipe(
      map(category => this.roles[category as 'healthcare' | 'studies' | 'work'].images)
    );
  }

  getTitle = (category: Category) => {
    const subtitles = this.roles[category].components.title.split(" ");
    const last = subtitles.pop();
    return [subtitles.join(" "), last];
  }

  getComponent = (category: Category) => {
    return this.roles[category].components.items;
  }

  getComponentHeadings = (category: Category) => {
    return this.getComponent(category).map(c => c.title).join(", ");
  }
}
