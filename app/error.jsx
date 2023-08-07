"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>something went wrong</h1>
      <button
        className="bg-[#ffdf6c] text-black font-bold rounded-md p-2 my-3"
        onClick={() => reset()}
      >
        reset
      </button>
    </div>
  );
}
