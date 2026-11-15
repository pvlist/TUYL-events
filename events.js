const events = [
  {
    title: "Open meeting",
    date: "2026-11-26T19:30:00",
    location: "Oude Lieshoutseweg 7, 5492 HT Sint-Oedenrode",
    description: "De maandelijkse open meeting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DSxGqhbGliWE6JKy8YKqUwX_hd3yLgHQ9dwapK5EyQ&s=10"
  },
  {
    title: "Free Enterprise Celebration (FEC)",
    date: "2026-11-07T10:00:00",
    location: "Arena Ursynów, Rotmistrza Witolda Pileckiego, 12202-781 Warsaw, Poland",
    description: "Er is een leven vòòr FEC en er is een leven ná FEC",
    image: "https://ci3.googleusercontent.com/meips/ADKq_NbzUBtO5cgsnYTphikYrjBZ0omWL_UAEQFZFKWY989u5E1I52WrDiDz8En5QNeuQPm2q_50WMFUmgfGc_xAfJx_gDj3c9M0nD6vpRGSdENixhorxWObqS1sJ6QLGhodA9rfYIPXhPui-xiG-L5VtgnuM95_GD2PkW8=s0-d-e1-ft#https://mcusercontent.com/0cd9acdf951e5f4c839bde221/images/fa8488c9-a600-27e6-55eb-eff7b9a649f5.png",
    url: "https://mcusercontent.com/0cd9acdf951e5f4c839bde221/files/0d03b57e-3e79-8bb8-776b-86cee12a90a7/European_FEC_2026_newsletter_EN_2.pdf"
  },
  {
    title: "Free Enterprise Celebration (FEC)",
    date: "2026-11-08T11:00:00",
    location: "Arena Ursynów, Rotmistrza Witolda Pileckiego, 12202-781 Warsaw, Poland",
    description: "Er is een leven vòòr FEC en er is een leven ná FEC",
    image: "https://ci3.googleusercontent.com/meips/ADKq_NbzUBtO5cgsnYTphikYrjBZ0omWL_UAEQFZFKWY989u5E1I52WrDiDz8En5QNeuQPm2q_50WMFUmgfGc_xAfJx_gDj3c9M0nD6vpRGSdENixhorxWObqS1sJ6QLGhodA9rfYIPXhPui-xiG-L5VtgnuM95_GD2PkW8=s0-d-e1-ft#https://mcusercontent.com/0cd9acdf951e5f4c839bde221/images/fa8488c9-a600-27e6-55eb-eff7b9a649f5.png",
    url: "https://mcusercontent.com/0cd9acdf951e5f4c839bde221/files/0d03b57e-3e79-8bb8-776b-86cee12a90a7/European_FEC_2026_newsletter_EN_2.pdf"
  },
  {
    title: "Powerboost",
    date: "2026-11-28T11:00:00",
    location: "Zoom",
    description: "Een training waar tips en tricks jouw letterlijk een boost geven",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_fNrFOLqjeU4CY4GxS4SXrJHkcjzZmFzLNoxy8divQ&s=10"
  },
  {
    title: "Kerstviering",
    date: "2026-12-12T12:00:00",
    location: "Oude Lieshoutseweg 7, 5492 HT Sint-Oedenrode",
    description: "Onze jaarlijkse kerstviering. Een combinatie van eten, drinken, gezelligheid en saamhorigheid",
    image: "pictures/kerstviering.jpeg",
    url: "pictures/kerstviering.jpeg"
  },
  {
    title: "TUEC Teamuitje",
    date: "2026-12-19T12:00:00",
    location: "More info coming soon",
    description: "More info coming soon",
    image: "https://media.istockphoto.com/id/2171020551/nl/vector/coming-soon-speechbubble-advertising-with-megaphone-icon.jpg?s=612x612&w=0&k=20&c=8sr0OfLWD0lRMKazdBUoRX33k1V0aw0mVmX3ER0PTv0="
  },
  {
    title: "Business Development Seminar (BDS)",
    date: "2027-01-09T13:00:00",
    location: "Tongerloplein 1, 5071 CX Udenhout",
    description: "Het maandelijkse seminar waar fantastische spreker jouw inspireren en motiveren bij het bereiken van jouw dromen en doelen",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUPmrhVu-fgX_NuN9MbAZFqXJaZJtBXT4c8ZscTPVLZNVw7E1UI=s80-p"
  },
  {
    title: "Business Development Seminar (BDS)",
    date: "2027-03-13T13:00:00",
    location: "Tongerloplein 1, 5071 CX Udenhout",
    description: "Het maandelijkse seminar waar fantastische spreker jouw inspireren en motiveren bij het bereiken van jouw dromen en doelen",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUPmrhVu-fgX_NuN9MbAZFqXJaZJtBXT4c8ZscTPVLZNVw7E1UI=s80-p"
  },
  {
    title: "Yager Winter Growth Conference (YWGC)",
    date: "2027-02-20T10:00:00",
    location: "Hotel NH Eindhoven Conference Centre Koningshof, Locht 117, 5504 RM Eindhoven",
    description: "Er is een leven vòòr de Conference en er is een leven ná de Conference",
    image: "https://media.istockphoto.com/id/2171020551/nl/vector/coming-soon-speechbubble-advertising-with-megaphone-icon.jpg?s=612x612&w=0&k=20&c=8sr0OfLWD0lRMKazdBUoRX33k1V0aw0mVmX3ER0PTv0="
  },
  {
    title: "Yager Winter Growth Conference (YWGC)",
    date: "2027-02-21T11:00:00",
    location: "Hotel NH Eindhoven Conference Centre Koningshof, Locht 117, 5504 RM Eindhoven",
    description: "Er is een leven vòòr de Conference en er is een leven ná de Conference",
    image: "https://media.istockphoto.com/id/2171020551/nl/vector/coming-soon-speechbubble-advertising-with-megaphone-icon.jpg?s=612x612&w=0&k=20&c=8sr0OfLWD0lRMKazdBUoRX33k1V0aw0mVmX3ER0PTv0="
  },
  {
    title: "Yager Summer Growth Conference (YSGC)",
    date: "2027-06-26T10:00:00",
    location: "Hotel NH Eindhoven Conference Centre Koningshof, Locht 117, 5504 RM Eindhoven",
    description: "Er is een leven vòòr de Conference en er is een leven ná de Conference",
    image: "https://media.istockphoto.com/id/2171020551/nl/vector/coming-soon-speechbubble-advertising-with-megaphone-icon.jpg?s=612x612&w=0&k=20&c=8sr0OfLWD0lRMKazdBUoRX33k1V0aw0mVmX3ER0PTv0="
  },
  {
    title: "Yager Summer Growth Conference (YSGC)",
    date: "2027-06-27T11:00:00",
    location: "Hotel NH Eindhoven Conference Centre Koningshof, Locht 117, 5504 RM Eindhoven",
    description: "Er is een leven vòòr de Conference en er is een leven ná de Conference",
    image: "https://media.istockphoto.com/id/2171020551/nl/vector/coming-soon-speechbubble-advertising-with-megaphone-icon.jpg?s=612x612&w=0&k=20&c=8sr0OfLWD0lRMKazdBUoRX33k1V0aw0mVmX3ER0PTv0="
  }
];