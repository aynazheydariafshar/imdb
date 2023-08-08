"use client";
import Image from "next/image";
import Link from "next/link";
import imageLoader from "../public/assets/images/clapperboard.jpg";
import Error from "@/app/error";

export default function Card({ item }) {
  return (
    <div className="cursor-pointer group sm:p-4 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${item.id}`}>
        <Image
          // src={`https://image.tmdb.org/t/p/original${
          //   item.backdrop_path || item.poster_path
          // }`}
          src={imageLoader}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/assets/images/clapperboard.jpg"
        ></Image>
        
      </Link>
    </div>
  );
}
