import { useState, useEffect } from "react";
import SnippetList from "../components/Snippet/List";
import { api } from "../services/api";

export default function SearchPage({ onEdit }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!q) { setResults([]); return; }
    api.searchSnippets(q).then(setResults);
  }, [q]);

  return (
    <div>
      <input className="border p-2 w-full"
        placeholder="Search snippets..."
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <SnippetList snippets={results} onEdit={onEdit} />
    </div>
  );
}