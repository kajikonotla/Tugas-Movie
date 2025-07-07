import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
});

instance.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_REACT_API_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Ambil film global
export async function getMovies() {
  const res = await instance.get("3/movie/popular");
  return res.data;
  }

  export async function getMovieDetail(id: string) {
  return await instance.get(`/3/movie/${id}`);
}


// Ambil film Indonesia
export async function getMoviesIndo() {
  const res = await instance.get("3/discover/movie", {
    params: {
      with_original_language: "id", // kode bahasa Indonesia
      with_genres: 35,
    },
  });
  return res.data;
}

export async function getMoviesAc() {
  const res = await instance.get("3/discover/movie", {
    params: {
       with_genres: 28,
    },
  });
  return res.data;
}

export async function getMoviesHO() {
  const res = await instance.get("3/discover/movie", {
    params: {
       with_genres: 27,
    },
  });
  return res.data;
}
export async function getMoviesCA() {
  const res = await instance.get("3/discover/movie", {
    params: {
       with_genres: 16,
    },
  });
  return res.data;
}

