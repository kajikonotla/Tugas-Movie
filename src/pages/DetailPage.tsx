import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetail } from "../midleware/movie.api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {Card } from "../components/Card";

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getMovieDetail(id).then((res) => setMovie(res.data));
    }
  }, [id]);

  if (!movie)
    return (
      <div className="text-white p-10 text-center animate-pulse">Loading...</div>
    );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white px-4 py-10 md:px-20">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-400 ml-135 mb-30"> DETAIL PAGE</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.original_title}
            className="rounded-xl w-full shadow-lg"
          />

          <div>
            <motion.h1
              className="text-4xl font-extrabold mb-4 text-teal-400"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {movie.original_title}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {movie.overview}
            </motion.p>

            <motion.div
              className="text-sm space-y-2 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p>
                <span className="font-semibold text-white">Tanggal Rilis:</span>{" "}
                {movie.release_date}
              </p>
              <p>
                <span className="font-semibold text-white">Rating:</span>{" "}
                {movie.vote_average} / 10
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Card/>
      <Footer />
    </>
  );
};

export default DetailPage;
