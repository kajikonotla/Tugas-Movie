import { create } from "zustand";
import { getMovies, getMoviesIndo, getMoviesAc , getMoviesCA, getMoviesHO} from "../midleware/movie.api";

interface Movie {
  backdrop_path: string;
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  link?: string;
  video?: boolean;
}

interface MovieStore {
  movies: Movie[];
  setMovies: () => Promise<void>;
}

export const store = create<MovieStore>((set) => ({
  movies: [],
  setMovies: async () => {
    const data = await getMovies();
    set({ movies: data.results });
  },
}));

export const storeIndo = create<MovieStore>((set) => ({
  movies: [],
  setMovies: async () => {
    const data = await getMoviesIndo();
    set({ movies: data.results });
  },
}));

export const AC = create<MovieStore>((set) => ({
  movies: [],
  setMovies: async () => {
    const data = await getMoviesAc();
    set({ movies: data.results });
  },
}));

export const HO = create<MovieStore>((set) => ({
  movies: [],
  setMovies: async () => {
    const data = await getMoviesHO();
    set({ movies: data.results });
  },
}));

export const CA = create<MovieStore>((set) => ({
  movies: [],
  setMovies: async () => {
    const data = await getMoviesCA();
    set({ movies: data.results });
  },
}));

