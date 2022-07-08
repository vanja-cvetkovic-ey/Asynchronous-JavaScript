async function getMovie() {
  const response = await fetch(
    "https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a087f168e5mshae6bf8bc3ad1e57p1ec68fjsn5606dce549f1",
        "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
}

getMovie();

async function getDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
}

getDog();
