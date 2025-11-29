import { useState, useEffect } from "react";
import { api } from "../services/api";
import TagSelector from "../components/TagSelector";

export default function SnippetEditor({ snippetId, onDone }) {
  const [snippet, setSnippet] = useState({ code: "", description: "", tags: [] });
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    api.getTags().then(setAllTags);
    if (snippetId) api.getSnippet(snippetId).then(setSnippet);
  }, [snippetId]);

  const save = async () => {
    if (snippetId) await api.updateSnippet(snippetId, snippet);
    else await api.createSnippet(snippet);
    onDone();
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea className="border p-2" rows={10}
        value={snippet.code}
        onChange={e => setSnippet({ ...snippet, code: e.target.value })}
      />
      <textarea className="border p-2" rows={4}
        value={snippet.description}
        onChange={e => setSnippet({ ...snippet, description: e.target.value })}
      />
      <TagSelector tags={allTags} selected={snippet.tags}
        onChange={tags => setSnippet({ ...snippet, tags })} />

      <button className="border px-4 py-2" onClick={save}>Save</button>
    </div>
  );
}