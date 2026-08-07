const events = [
  {
    title: "Family Day",
    date: "2026-08-15T10:00:00",
    location: "Zilvermeerlaan 2, 2400 Mol, België",
    description: "Familiedag is dè jaarlijkse traditie waar we genieten van heerlijk eten, zwemmen en leuke momenten",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwSj18sO3RI3p7Y7WPcammOWyqQp9F68zrn6b2JpQ-A&s=10"
  },
  {
    title: "Open meeting",
    date: "2026-08-27T19:30:00",
    location: "Oude Lieshoutseweg 7, 5492 HT Sint-Oedenrode",
    description: "De maandelijkse open meeting",
    image: "https://wwsg.com/wp-content/uploads/2023/05/Speaker-on-small-stage-1024x576.jpg"
  },
  {
    title: "Open meeting",
    date: "2026-09-24T19:30:00",
    location: "TBD",
    description: "De maandelijkse open meeting",
    image: "https://wwsg.com/wp-content/uploads/2023/05/Speaker-on-small-stage-1024x576.jpg"
  },
  {
    title: "Open meeting",
    date: "2026-10-29T19:30:00",
    location: "Oude Lieshoutseweg 7, 5492 HT Sint-Oedenrode",
    description: "De maandelijkse open meeting",
    image: "https://wwsg.com/wp-content/uploads/2023/05/Speaker-on-small-stage-1024x576.jpg"
  },
  {
    title: "Open meeting",
    date: "2026-11-26T19:30:00",
    location: "Oude Lieshoutseweg 7, 5492 HT Sint-Oedenrode",
    description: "De maandelijkse open meeting",
    image: "https://wwsg.com/wp-content/uploads/2023/05/Speaker-on-small-stage-1024x576.jpg"
  },
  {
    title: "Powerboost",
    date: "2026-08-29T11:00:00",
    location: "Zoom",
    description: "Een training waar tips en tricks jouw letterlijk een boost geven",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_fNrFOLqjeU4CY4GxS4SXrJHkcjzZmFzLNoxy8divQ&s=10"
  },
  {
    title: "Business Development Seminar (BDS)",
    date: "2026-09-05T13:00:00",
    location: "Tongerloplein 1, 5071 CX Udenhout",
    description: "Het maandelijkse seminar waar fantastische spreker jouw inspireren en motiveren bij het bereiken van jouw dromen en doelen",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojPfGlItd6LIbnyJwLgBaeJsOXCcB7qFqS6JCX5Y8xQ&s=10"
  },
  {
    title: "Powerboost",
    date: "2026-10-04T11:00:00",
    location: "Zoom",
    description: "Een training waar tips en tricks jouw letterlijk een boost geven",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_fNrFOLqjeU4CY4GxS4SXrJHkcjzZmFzLNoxy8divQ&s=10"
  },
  {
    title: "Business Development Seminar (BDS)",
    date: "2026-10-10T13:00:00",
    location: "Tongerloplein 1, 5071 CX Udenhout",
    description: "Het maandelijkse seminar waar fantastische spreker jouw inspireren en motiveren bij het bereiken van jouw dromen en doelen",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojPfGlItd6LIbnyJwLgBaeJsOXCcB7qFqS6JCX5Y8xQ&s=10"
  },
  {
    title: "Free Enterprise Celebration (FEC)",
    date: "2026-11-07T10:00:00",
    location: "Arena Ursynów, Rotmistrza Witolda Pileckiego, 12202-781 Warsaw, Poland",
    description: "Er is een leven vòòr FEC en er is een leven ná FEC",
    image: "https://ci3.googleusercontent.com/meips/ADKq_NbzUBtO5cgsnYTphikYrjBZ0omWL_UAEQFZFKWY989u5E1I52WrDiDz8En5QNeuQPm2q_50WMFUmgfGc_xAfJx_gDj3c9M0nD6vpRGSdENixhorxWObqS1sJ6QLGhodA9rfYIPXhPui-xiG-L5VtgnuM95_GD2PkW8=s0-d-e1-ft#https://mcusercontent.com/0cd9acdf951e5f4c839bde221/images/fa8488c9-a600-27e6-55eb-eff7b9a649f5.png"
  },
  {
    title: "Free Enterprise Celebration (FEC)",
    date: "2026-11-08T11:00:00",
    location: "Arena Ursynów, Rotmistrza Witolda Pileckiego, 12202-781 Warsaw, Poland",
    description: "Er is een leven vòòr FEC en er is een leven ná FEC",
    image: "https://ci3.googleusercontent.com/meips/ADKq_NbzUBtO5cgsnYTphikYrjBZ0omWL_UAEQFZFKWY989u5E1I52WrDiDz8En5QNeuQPm2q_50WMFUmgfGc_xAfJx_gDj3c9M0nD6vpRGSdENixhorxWObqS1sJ6QLGhodA9rfYIPXhPui-xiG-L5VtgnuM95_GD2PkW8=s0-d-e1-ft#https://mcusercontent.com/0cd9acdf951e5f4c839bde221/images/fa8488c9-a600-27e6-55eb-eff7b9a649f5.png"
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
    date: "2026-12-12T13:00:00",
    location: "TBD",
    description: "TBD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5Yd5aCr2TI0BzpLLVLWRwtbj5n803eRoEax7DF1rcw&s=10"
  },
  {
    title: "TUEC Teamuitje",
    date: "2026-12-19T12:00:00",
    location: "TBD",
    description: "TBD",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWSh6PdeWcIotrkw7JCqDm7_5rtx0tpersLKJf1_2oQ&s=10"
  }
];