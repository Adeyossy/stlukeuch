import { Component } from '@angular/core';

@Component({
  selector: 'app-page-5',
  templateUrl: './page-5.component.html',
  styleUrls: ['./page-5.component.css']
})
export class Page5Component {
  sections = [
    {
      title: "How you can serve",
      subtitle: "We need persons to key into:",
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
      action: "https://wa.me/2348066199175"
    },
    {
      title: "Projects we have",
      subtitle: "",
      images: [],
      components: [
        {
          title: "Supporting patients in financial need",
          body: "",
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Supporting students in financial difficulty",
          body: "",
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Food bank for students",
          body: "",
          link: "",
          type: "",
          action: ""
        },
        {
          title: "Improving on current structure",
          body: `
            Please select any one of these items wherein you can provide your professional skills or materials needed, thank you:

            Reading room - furniture, temperature control with renewable energy,
            Student hostel with cheaper energy for the students,
            Repair of the Church,
            Maintenance of the rectory,
            Purse for sick priest and religious,
            Safe play area for children,
            Irrigation of the prayer garden,
            Solar Lighting of the prayer garden,
            Our Lady water fountain,
            Modernisation of the Sacristy,
            Mass vestments,
            Alter linen,
            Roof maintenance of the Church,
            Deep cleaning equipment.
          `,
          link: "",
          type: "",
          action: ""
        },
      ],
      action: "https://wa.me/2348066199175"
    }
  ];
}
