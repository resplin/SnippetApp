export default function SnippetCard({ snippet }) {
  return (
    <div className="border p-4">
      <pre>{snippet.code}</pre>
      <p>{snippet.description}</p>
    </div>
  );
}