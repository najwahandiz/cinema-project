import { Form } from "react-router";
// import Mv1 from "./Assets/le-film-qui-a-inspire.jpg";


   const Movies = [
  {
    id: 1,
    name: "Garcon",
    year: 2010,
    time:"121 min",
    category: "Science Fiction",
    language: "English",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    description:
      "A skilled thief is offered a chance at redemption if he can successfully perform inception: planting an idea inside someone's subconscious.",
    image: '/images/Mv1.jpg'
  },

   {
    id: 2,
    name: "LE NOM DE LA ROSE",
    year: 2014,
    time:"133 min",
    category: "Adventure / Sci-Fi",
    language: "English",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description:
      "A team of explorers travels through a wormhole in space to ensure humanity's survival as Earth becomes uninhabitable.",
    image: '/images/Mv2.jpg'
  },

  {
    id: 3,
    name: "ZEBRA ",
    year: 2019,
    time:"147 min",
    category: "Thriller / Drama",
    language: "Korean",
    actors: ["Song Kang-ho", "Choi Woo-shik", "Park So-dam"],
    description:
      "A poor family schemes to infiltrate the household of a wealthy couple, leading to dark and unexpected consequences.",
    image: '/images/Mv3.jpg'
  },

  {
    id: 4,
    name: "A SON IMAGE",
    year: 2008,
    time:"163 min",
    category: "Action / Crime",
    language: "English",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description:
      "Batman faces his greatest psychological and moral test when the Joker unleashes chaos on Gotham City.",
    image: '/images/Mv4.jpg'
  },

  {
    id: 5,
    name: "TALES OF BABYLON",
    year: 2016,
    time:"139 min",
    category: "Romantic / Musical",
    language: "English",
    actors: ["Ryan Gosling", "Emma Stone"],
    description:
      "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    image: '/images/Mv5.webp'
  },

  {
    id: 6,
    name: "AUX NOM DE LA TERRE",
    year: 1972,
    time:"182 min",
    category: "Crime / Drama",
    language: "English / Italian",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv6.jpg'
  },

  {
    id: 7,
    name: "ARCHER",
    year: 2018,
    time:"182 min",
    category: "Crime / Action",
    language: "English ",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv7.jpg'
  },

  {
    id: 8,
    name: "TORN PAPER",
    year: 2015,
    time:"182 min",
    category: "Crime / Drama",
    language: "English / Italian",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv8.jpg'
  },

   {
    id: 9,
    name: "SIRIUS",
    year: 2020,
    time:"182 min",
    category: "Drama",
    language: "English",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv9.jpg'
  },

   {
    id: 10,
    name: "DUNE",
    year: 2015,
    time:"182 min",
    category: "Crime / Drama",
    language: "English / Italian",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv10.jpg'
  },

   {
    id: 11,
    name: "TOP GUN",
    year: 2019,
    time:"182 min",
    category: "Adventure / Sci-Fi",
    language: "English / Italian",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv11.jpg'
  },

  {
    id: 12,
    name: "ROLE PLAY",
    year: 2021,
    time:"182 min",
    category: "Drama / Sci-Fi",
    language: "English / Italian",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv12.jpg'
  },

  {
    id: 13,
    name: "INSAISISSABLES",
    year: 2022,
    time:"182 min",
    category: " Adventur",
    language: "English ",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv13.jpg'
  },

  {
    id: 14,
    name: "YOUR HEADLINE",
    year: 2017,
    time:"182 min",
    category: "Drama ",
    language: "English / Italian",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv14.jpg'
  },

  {
    id: 15,
    name: "INTRUS",
    year: 2021,
    time:"182 min",
    category: "Horror",
    language: "English / Italian",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv15.jpg'
  }
  
];


export default Movies;
