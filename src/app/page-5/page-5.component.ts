import { Component } from '@angular/core';
import { Sections } from '../models/section';

@Component({
  selector: 'app-page-5',
  templateUrl: './page-5.component.html',
  styleUrls: ['./page-5.component.css']
})
export class Page5Component {
  first = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fst.luke.4.pews.diagonal.view.resized.jpg?alt=media&token=c3f8d789-f0a6-4843-86fc-14d17bd68355',
      description: "Diagonal View of Church Pews.",
      thumbnail: ''
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fst.luke.5.pews.centered.mural.resized.jpg?alt=media&token=72196822-e25f-4e42-9cac-255111120116',
      description: "Church Pews with Mural of The Disabled being led down from a Roof.",
      thumbnail: ''
    }
  ];

  sections: Sections = [
    {
      title: "How you can serve",
      subtitle: "We need persons to key into:",
      body: [
        "1. The Choir",
        "2. Church Ushers",
        "3. Alter Servers",
        "4. Lectors",
        "5. Sacristans"
      ],
      components: [],
      images: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fst.luke.young.choir.jpg?alt=media&token=db5b42fd-867f-4e2a-9271-9d345435e5bb',
          description: "The Choir",
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fst.luke.reverend.holding.an.emblem.png?alt=media&token=9741ca8f-c3c9-4df6-8bd2-177b54ee8d3e",
          description: "Church Ushers"
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fst.luke.church.helper.and.priest.jpg?alt=media&token=319d9452-01b2-45f3-9b54-10bd0a955d61",
          description: "Alter Servers"
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Flector.chandelier.jpg?alt=media&token=d699832c-e3a9-4a90-b1d3-b29ccf3c3f7f",
          description: "Lectors"
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fst.luke.sacristans.jpg?alt=media&token=ee2a4b56-9f61-4ca1-a55c-c9568606cead",
          description: "Sacristans"
        },
      ],
      action: {
        text: "JOIN THE WORKFORCE",
        url: "https://wa.me/2348066199175"
      }
    },
    {
      title: "Projects we have",
      subtitle: "",
      body: [],
      images: [],
      components: [
        {
          title: "Supporting patients in financial need",
          body: [],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Supporting students in financial difficulty",
          body: [],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Food bank for students",
          body: [],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Improving on current structure",
          body: [
            "Please select any one of these items wherein you can provide your professional skills or materials needed, thank you:",
            [
              "Reading room - furniture, temperature control with renewable energy",
              "Student hostel with cheaper energy for the students",
              "Repair of the Church",
              "Maintenance of the rectory",
              "Purse for sick priest and religious",
              "Safe play area for children",
              "Irrigation of the prayer garden",
              "Solar Lighting of the prayer garden",
              "Our Lady water fountain",
              "Modernisation of the Sacristy",
              "Mass vestments",
              "Alter linen",
              "Roof maintenance of the Church",
              "Deep cleaning equipment."
            ]
          ],
          link: "",
          type: "",
          action: ""
        },
      ],
      action: {
        text: "SUPPORT OUR PROJECTS",
        url: "https://wa.me/2348066199175"
      }
    }
  ];
}
