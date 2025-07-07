// components/CardFilm.tsx
import React from "react";

interface CardFilmProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const CardFilm: React.FC<CardFilmProps> = ({ title, description, image, link }) => {
  return (
    <div className="card bg-base-100 w-64 shadow-md flex-shrink-0 bg-gray-200 group relative overflow-hidden">
      <figure className="px-4 pt-4">
        <img src={image} alt={title} className="rounded-lg h-40 object-cover" />
      </figure>

      {/* Hover content */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 ">
        <h2 className="text-white text-lg font-bold mb-2 text-center">{title}</h2>
        <p className="text-sm text-gray-300 mb-4 text-center">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-sm btn-primary">Tonton</button>
          </a>
        )}
      </div>

      {/* Normal card */}
      <div className="card-body p-4 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <h2 className="card-title text-base text-black">{title}</h2>
        <p className="text-sm text-black">{description}</p>
      </div>
    </div>
  );
};

export default CardFilm;
