export const fethMovieDetail = async (movieID: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}}?language=en-US&page=1`, {
    headers: {
      Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmU0NDc0OWUzYzFiYzFhNmFmZWRlYTQ0MmJlMTUyMSIsInN1YiI6IjY1ODk0Mzg0ZTI5NWI0MzEyNTU4MjMyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nKd9ZazfDJz8xkDCyqq6ZVsG-mG1Xw7AJ7QivfZmqis'
    }
  });

  return res.json();
}
