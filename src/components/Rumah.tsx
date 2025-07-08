
import Navbar from "./Navbar";
import { Card, Cardindo } from "./Card";
import { useEffect } from "react";
import { store } from "../store/movie.store";


interface MuvieResult {

  poster_path: string;

}
const Rumah = () => {



  const { setMovies, movies } = store();

  useEffect(() => {
    setMovies();
  }, []);


  console.log(movies);


  return (
    <>

      <title>MOVIE</title>

      <div className="bg-black min-h-screen">

        <Navbar />
        <div className="max-w-4xl mx-auto mt-10  -z-">


          <div className="carousel w-full transition-all duration-500 ease-in-out hide-scrollbar">
            {movies?.map((item: MuvieResult, index: number) => (
              <div key={`bottom-${index}`} id={`slide-${index}`} className="carousel-item w-full">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`} // atau /original
               className="w-full h-64 md:h-80 object-cover rounded-2xl"


                />
              </div>
            ))}
          </div>


          {/* Navigation Buttons */}
          <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 px-4">

          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#slide1" className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"></a>
            <a href="#slide2" className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"></a>
            <a href="#slide3" className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"></a>
            <a href="#slide4" className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"></a>
          </div>
        </div>
        <Card />
        <Cardindo />

      </div>
    </>
  );
};

export default Rumah;
