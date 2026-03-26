import { Component } from '@angular/core';
import { Section } from '../models/section';

@Component({
  selector: 'app-page-7',
  templateUrl: './page-7.component.html',
  styleUrls: ['./page-7.component.css']
})
export class Page7Component {
  sections: Section[] = [
    {
      title: "",
      subtitle: "",
      images: [],
      components: [
        {
          title: "Prayer Time",
          body: [
            "Anytime.",
            "Church is open, prayer garden, Mass intentions, Prayer requests."
          ],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Legion of Mary",
          body: [],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "St Vincent de Paul",
          body: [],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Purgatorian Society",
          body: [],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Sacred Heart of Jesus Society",
          body: [],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Snippets of Mass and or Church activities from Mr Julius Oba’s recording (videos and pictures)",
          body: [
            "Will last only 1 week or until replaced b current activities."
          ],
          link: "",
          type: "",
          action: ""
        },
      ],
      action: {
        text: "JOIN THE WORKFORCE",
        url: "https://wa.me/2348066199175"
      }
    },
    {
      title: "Baptism",
      subtitle: "Infant baptism is available. It may be given in the Church or on the Wards when necessary.",
      components: [],
      images: [
        {
          url: "assets/images/st.luke.young.choir.jpg",
          description: "The Choir"
        },
        {
          url: "assets/images/st.luke.reverend.holding.an.emblem.png",
          description: "Church Ushers"
        },
        {
          url: "assets/images/st.luke.church.helper.and.priest.jpg",
          description: "Alter Servers"
        },
        {
          url: "assets/images/st.luke.prayer.1.png",
          description: "Lectors"
        },
        {
          url: "assets/images/st.luke.sacristans.jpg",
          description: "Sacristans"
        },
      ],
      action: {
        text: "JOIN THE WORKFORCE",
        url: "https://wa.me/2348066199175"
      }
    }
  ];
}
