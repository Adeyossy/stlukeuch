import { Component } from '@angular/core';
import { images } from '../models/gallery';
import { Section } from '../models/section';

@Component({
  selector: 'app-page-9',
  templateUrl: './page-9.component.html',
  styleUrls: ['./page-9.component.css']
})
export class Page9Component {
  imgs = images.slice(1, 2);

  sections: Section[] = [
    {
      title: "Contact Persons",
      subtitle: "Chaplaincy Pastoral Council Members",
      body: [],
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fimg.1.reverend.father.felix.akinyode.jpg?alt=media&token=a9ea8a2b-3e6c-4a77-bf5d-db3ccaaca88b",
          description: "President of the CPC \n\nReverend Felix Akinyode"
        },
        {
          url: "",
          description: "Chairman of CPC"
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fimg.2.dr.amarachi.maduagwu.jpg?alt=media&token=f79a3dd7-6db5-450c-8d77-60360e17a5e2",
          description: "Chairman of Chaplaincy Committee\n\nDr. Amarachi Maduagwu"
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fimg.3.prof.asuzu.jpg?alt=media&token=95617cba-d389-4758-819f-d3b4c5d8310b",
          description: "Financial Lead\n\nProf. Micheal C Asuzu",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fimg.7.mrs.oba.jpg?alt=media&token=e395154b-3358-454a-9a90-b53e5c8db2a5",
          description: "Welfare Lead\n\nMrs. Oba"
        },
        {
          url: "",
          description: "Project lead\n\nMr. Dare"
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fimg.4.prof.david.irabor.jpg?alt=media&token=6644be32-491b-4c5a-b56b-78ab17a20944",
          description: "Education Lead\n\nProf. David Irabor"
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fimg.5.dr.emmanuelle.irabor.jpg?alt=media&token=83744b0f-e665-45c6-a23f-cc89eefc707c",
          description: "IT lead\n\nDr. Achiaka Irabor"
        }
      ],
      components: [],
      action: {
        text: "",
        url: ""
      }
    },
    {
      title: "The History of St. Luke",
      subtitle: "Coming Soon",
      images: [],
      components: [],
      body: [],
      action: {
        text: "",
        url: ""
      }
    },
    {
      title: "Past Priest in St Luke's",
      subtitle: "Coming Soon",
      images: [],
      components: [],
      body: [],
      action: {
        text: "",
        url: ""
      }
    },
    {
      title: "A Tour of the Church",
      subtitle: "Coming Soon",
      images: [],
      components: [],
      body: [],
      action: {
        text: "",
        url: ""
      }
    }
  ]
}
