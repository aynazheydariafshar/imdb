import Image from "next/image";
import imageLoader from "@/public/assets/images/clapperboard.jpg";
import { HiOutlineThumbUp } from "react-icons/hi";

const API_KEY = "38bbfa031a667aa192d13074aa65b201";

async function getMovies(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("Error fetching data");
  return await res.json();
}

export default async function Movie({ params }) {
  const movieId = params.id;
  const item = await getMovies(movieId);
  return (
    <div className="p-3 w-full md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
      <Image
        // src={`https://image.tmdb.org/t/p/original${
        //   item.backdrop_path || item.poster_path
        // }`}
        src={imageLoader}
        alt="image is not available"
        width={500}
        height={300}
        style={{ maxWidth: "100%", height: "100%" }}
        className="rounded-lg"
        placeholder="blur"
        blurDataURL="/assets/images/spinner.svg"
      ></Image>
      <div className="p-2">
        <h2 className="text-lg mb-2 font-bold">{item.title || item.name}</h2>
        <p className="text-lg mb-3">
          <span className="font-semibold">Overview :</span> {item.overview}
        </p>
        <p className="flex items-center mb-1">
          <span className="font-semibold mr-2">Date :</span>
          {item.release_date || item.first_air_date}
        </p>
        <p className="flex items-center">
          <HiOutlineThumbUp className="mr-1" /> {item.vote_count}
        </p>
      </div>
    </div>
  );
}
