export default function Result({ results }) {
  return (
    <div>
      {results.map((item) => (
        <div key={item.id}>{item.original_title}</div>
      ))}
    </div>
  );
}
