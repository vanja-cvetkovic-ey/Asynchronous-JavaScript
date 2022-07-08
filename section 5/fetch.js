const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a087f168e5mshae6bf8bc3ad1e57p1ec68fjsn5606dce549f1",
    "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
  },
};

fetch(
  "https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
