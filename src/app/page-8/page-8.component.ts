import { Component } from '@angular/core';

@Component({
  selector: 'app-page-8',
  templateUrl: './page-8.component.html',
  styleUrls: ['./page-8.component.css']
})
export class Page8Component {
  sections = [
    {
      title: "Catechism Activities",
      subtitle: "Please register with the Parish Priest. Attendance is monitored for receipt of the sacraments. Open to all who want to refresh their memory on the faith.",
      items: [
        {
          heading: "For Children",
          subheadings: [
            "Saturday at 4pm"
          ]
        },
        {
          heading: "For Adults",
          subheadings: [
            "Saturday at 4pm"
          ]
        },
      ]
    },
    {
      title: "Chaplaincy Library",
      subtitle: "Access to teachings from:",
      items: [
        {
          heading: "Health Workers Guild meetings",
          subheadings: []
        },
        {
          heading: "Catholic Physicians Guild meetings",
          subheadings: []
        },
        {
          heading: "Guild of Nurse meeting",
          subheadings: []
        },
        {
          heading: "Legion of Mary",
          subheadings: []
        },
        {
          heading: "NFCS",
          subheadings: []
        },
        {
          heading: "FECAMDS",
          subheadings: []
        }
      ]
    },
    {
      title: "Guide of source for Catholic Faith Teaching",
      subtitle: "",
      items: [
        {
          heading: "ETWN Teaching",
          subheadings: [
            "https://www.ewtn.com/catholicism/teachings"
          ]
        },
        {
          heading: "Vatican Documents",
          subheadings: [
            "https://www.vatican.va/content/vatican/en.html"
          ]
        },
        {
          heading: "10 minutes with Jesus App",
          subheadings: [
            "https://10minuteswithjesus.org/"
          ]
        },
        {
          heading: "Laudate App",
          subheadings: [
            "https://play.google.com/store/apps/details?id=com.aycka.apps.MassReadings&hl=en&gl=US"
          ]
        },
        {
          heading: "Catechism of the Catholic Church",
          subheadings: [
            "https://www.vatican.va/archive/ENG0015/_INDEX.HTM"
          ]
        },
        {
          heading: "Catholic News Agency",
          subheadings: [
            "https://www.catholicnewsagency.com/news/28886/new-app-aims-to-enliven-scriptures-boost-accessibility"
          ]
        }
      ]
    }
  ];
}
