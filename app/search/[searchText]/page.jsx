import Result from "@/components/result";

const API_KEY = "38bbfa031a667aa192d13074aa65b201";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchText}&language=en-US&page=1&include_adult=false`
  );
  if (!res.ok) throw new Error("Error fetching data");
  const data = await res.json();
  return (
    <div>
      {data.results && data.results.length === 0 && (
        <h1 className="text-center font-semibold pt-6">No results found</h1>
      )}
      {data.results && <Result results={data.results} />}
    </div>
  );
}
