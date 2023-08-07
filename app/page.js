// "use client";
import Result from "@/components/result";

const API_KEY = "38bbfa031a667aa192d13074aa65b201";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {
      cache: "no-cache",
    },
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Result results={data.results} />
    </main>
  );
}
