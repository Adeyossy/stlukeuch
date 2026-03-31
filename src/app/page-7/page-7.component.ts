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
      title: "Prayer Time, Legion of Mary & More",
      subtitle: "",
      body: [],
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
        text: "",
        url: ""
      }
    },
    {
      title: "Baptism",
      subtitle: "",
      body: [
        "Infant baptism is available. It may be given in the Church or on the Wards when necessary.",
        "Adult baptism is also available, given with the sacrament of the Sacrament of the Holy Eucharist together with or without the scarcement of Confirmation.",
        "Please contact the Parish Priest for the logistics required to receive this sacrament by sending a message.",
        "Please include: your names, your parish or previous faith, your preferred phone number for communication, your specific request."
      ],
      components: [],
      images: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fbaby.baptism.png?alt=media&token=1be59c56-28be-4dfa-aca2-5c3c68eee716',
          description: 'Picture of an infant being baptised.'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fcommunion.png?alt=media&token=bd4181ed-d329-49fc-b6fd-490334b29dde',
          description: 'Sacrament of the Holy Eucharist.'
        }
      ],
      action: {
        text: "SEND MESSAGE",
        url: "https://wa.me/2348066199175"
      }
    },
    {
      title: "Marriage",
      subtitle: "",
      body: [
        "Marriage classes are available physically.",
        "When the intended are outside of Nigeria, we can support your marriage class through video conferencing (video must be on).",
        "If you are engaging in a mixed marriage and require teaching in other sacraments, we can also support you though our catechism classes. Please see that section for more information.",
        "Please contact the Parish Priest for the logistics required to receive this sacrament by sending a message.",
        "Please include: your names, your parish or previous faith, your preferred phone number for communication, your specific request."
      ],
      components: [],
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fmarriage.1.jpg?alt=media&token=7a6c49eb-533f-4fc8-a1d9-eddf115bb6ee",
          description: "Marriage"
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/stlukeuch.firebasestorage.app/o/static%2Fmarriage.2.jpg?alt=media&token=ac052e34-b799-4db5-8be7-44b305dbf90d",
          description: "Altar"
        }
      ],
      action: {
        text: "SEND MESSAGE",
        url: "https://wa.me/2348066199175"
      }
    },
    {
      title: "Funerals, Catechism & Confession",
      subtitle: "",
      body: [],
      images: [],
      components: [
        {
          title: "Funerals",
          body: [],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Catechism",
          body: [
            "There is catechism for children on Saturdays at 4 pm in the Church hall.",
            "We also have children's mass guided by a religious to optimise their learning and participation during the Holy Mass.",
            "There is catechism for adults on Saturday from 4 - 6pm in an office within the Church hall.",
          ],
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Confession",
          body: [
            "Confession are available every day after morning Mass at 6:30 am and at 8:00 am on Saturdays.",
            "Also available after 9 am Mass on Sundays."
          ],
          link: "",
          type: "",
          action: ""
        }
      ],
      action: {
        text: "",
        url: ""
      }
    }
  ];
}
