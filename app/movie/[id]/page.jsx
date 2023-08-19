// "use client";
import Image from "next/image";
import imageLoader from "@/public/assets/images/clapperboard.jpg";
import { HiOutlineThumbUp } from "react-icons/hi";

const API_KEY = "38bbfa031a667aa192d13074aa65b201";

async function getMovies(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return await res.json();
}

export default function Movie({ params }) {
  const movieId = params.id;
  const item = getMovies(movieId);
  return (
    <div className="flex-col sm:flex justify-between items-center">
      <Image
        // src={`https://image.tmdb.org/t/p/original${
        //   item.backdrop_path || item.poster_path
        // }`}
        src={imageLoader}
        alt={item.title}
        width={500}
        height={300}
        style={{ maxWidth: "100%", height: "auto" }}
        className="sm:rounded-lg group-hover:opacity-80 transition-opacity duration-200"
        placeholder="blur"
        blurDataURL="/assets/images/clapperboard.jpg"
      ></Image>
      <div className="p-2">
        <p>{item.overview}</p>
        <h2 className="truncate text-lg font-bold">
          {item.title || item.name}
        </h2>
        <p className="flex items-center">
          {item.release_date || item.first_air_date}
          <HiOutlineThumbUp className="mr-1 ml-5" /> {item.vote_count}
        </p>
      </div>
    </div>
  );
}
