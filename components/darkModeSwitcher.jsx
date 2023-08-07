"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

export default function DarkModeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <BsFillSunFill
          onClick={() => setTheme("light")}
          className=" hover:text-[#F5C518] hover:cursor-pointer"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => setTheme("dark")}
          className=" hover:text-[#F5C518] hover:cursor-pointer"
        />
      )}
    </>
  );
}
