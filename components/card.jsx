"use client";
import Image from "next/image";
import Link from "next/link";
import imageLoader from "../public/assets/images/clapperboard.jpg";
import { HiOutlineThumbUp } from "react-icons/hi";

export default function Card({ item, index }) {
  return (
    <div className="cursor-pointer relative group sm:p-4 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <div className="bg-red-400 rounded-full group-hover:bg-orange-400 absolute top-[-15px] text-center">
        <h2 className="px-1">{index + 1}</h2>
      </div>
      <Link href={`/movie/${item.id}`}>
        <Image
          // src={`https://image.tmdb.org/t/p/original${
          //   item.backdrop_path || item.poster_path
          // }`}
          src={imageLoader}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/assets/images/clapperboard.jpg"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2">{item.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {item.title || item.name}
          </h2>
          <p className="flex items-center">
            {item.release_date || item.first_air_date}
            <HiOutlineThumbUp className="mr-1 ml-5" /> {item.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
