import Card from "./card";

export default function Result({ results }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto py-2 gap-6">
      {results.map((item , index) => (
        <Card key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
