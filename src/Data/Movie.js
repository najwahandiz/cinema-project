import { Form } from "react-router";
// import Mv1 from "./Assets/le-film-qui-a-inspire.jpg";

const Movies = [
  {
    id: 1,
    name: "Garcon",
    year: 2010,
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
    category: "Crime / Drama",
    language: "English / Italian",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    image: '/images/Mv6.jpg'
  }
];


export default Movies;
