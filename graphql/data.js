let movies = [
  {
    id: 1,
    name: "LaLa Land",
    score: 8,
  },
  {
    id: 2,
    name: "Parasite",
    score: 8,
  },
  {
    id: 3,
    name: "Green Book",
    score: 9,
  },
  {
    id: 4,
    name: "1917",
    score: 7,
  },
  {
    id: 5,
    name: "Minari",
    score: 8,
  },
  {
    id: 6,
    name: "Les Miserable",
    score: 8,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movie.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };

  movies.push(newMovie);
  return newMovie;
};

// const peopleData = [
//   {
//     id: "0",
//     name: "Jennie2",
//     age: 14,
//     gender: "female",
//   },
//   {
//     id: "1",
//     name: "Jennie3",
//     age: 20,
//     gender: "male",
//   },
//   {
//     id: "2",
//     name: "Jennie4",
//     age: 22,
//     gender: "female",
//   },
//   {
//     id: "3",
//     name: "Jennie5",
//     age: 26,
//     gender: "female",
//   },
//   {
//     id: "4",
//     name: "Jennie7",
//     age: 23,
//     gender: "male",
//   },
//   {
//     id: "5",
//     name: "Jennie",
//     age: 20,
//     gerder: "female",
//   },
// ];
