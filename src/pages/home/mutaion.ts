export const rateMovie = async (movieID: number, rating: number ) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${import.meta.env.VITE_API_KEY}`, {
    method: 'POST',
    headers: {
      accept: "application/json",
      "content-type": "application/json;charset=utf-8"
    },
    body: `{"value":${rating}}`
  });

  console.log(res.json());

  return res.json();
}

export const rateTVShow = async (tvShowID: number, rating: number ) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${tvShowID}/rating?guest_session_id=${localStorage.getItem("guest_session_id")}&api_key=${import.meta.env.VITE_API_KEY}`, {
    method: 'POST',
    headers: {
      accept: "application/json",
      "content-type": "application/json;charset=utf-8"
    },
    body: `{"value":${rating}}`
  });

  return res.json();
}

