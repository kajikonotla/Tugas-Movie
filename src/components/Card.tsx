import { useEffect } from "react";
import { storeIndo, store, AC ,HO , CA} from "../store/movie.store";
import { Link } from "react-router-dom";

interface MuvieResult {
  backdrop_path: string;
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  link?: string;
  video?: boolean;
}

const Card = () => {
  const { setMovies, movies } = store();

  useEffect(() => {
    setMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-10 mt-10">FILM POPULER</h2>

      <div className="overflow-x-auto no-scrollbar mb-8">
        <div className="flex space-x-6 pb-4 px-4 w-max">
          {movies?.map((item: MuvieResult, index: number) => (
            <CardItem key={`populer-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Cardindo = () => {
  const { setMovies, movies } = storeIndo();

  useEffect(() => {
    setMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-10 mt-10">FILM INDONESIA</h2>

      <div className="overflow-x-auto no-scrollbar mb-8">
        <div className="flex space-x-6 pb-4 px-4 w-max">
          {movies?.map((item: MuvieResult, index: number) => (
            <CardItem key={`indo-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Action = () => {
  const { setMovies, movies } = AC();

  useEffect(() => {
    setMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-10 mt-10">ACTION </h2>

      <div className="overflow-x-auto no-scrollbar mb-8">
        <div className="flex space-x-6 pb-4 px-4 w-max">
          {movies?.map((item: MuvieResult, index: number) => (
            <CardItem key={`Action-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};


const Horror = () => {
  const { setMovies, movies } = HO();

  useEffect(() => {
    setMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-10 mt-10">Horror </h2>

      <div className="overflow-x-auto no-scrollbar mb-8">
        <div className="flex space-x-6 pb-4 px-4 w-max">
          {movies?.map((item: MuvieResult, index: number) => (
            <CardItem key={`Horror-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};


const CartoonCard = () => {
  const { setMovies, movies } = CA();

  useEffect(() => {
    setMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-10 mt-10">Cartoon </h2>

      <div className="overflow-x-auto no-scrollbar mb-8">
        <div className="flex space-x-6 pb-4 px-4 w-max">
          {movies?.map((item: MuvieResult, index: number) => (
            <CardItem key={`Cartoon-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};


const CardItem = ({ item }: { item: MuvieResult }) => (
  <div className="card w-64 flex-shrink-0 relative group overflow-hidden rounded-lg ">
    <figure className="w-full h-96">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.original_title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </figure>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h2 className="text-white text-xl font-bold mb-2">{item.original_title}</h2>
      <div className="max-h-0 group-hover:max-h-40 overflow-y-auto transition-all duration-300 mb-3">
        <p className="text-gray-300 text-sm pr-2">{item.overview}</p>
      </div>
        <Link to={`/detail/${item.id}`}>
        <button className="btn btn-primary btn-sm w-full">Detail</button>
        </Link>
    </div>
  </div>
);

export { Card, Cardindo, Action, Horror, CartoonCard };
