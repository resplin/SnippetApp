import { useState, useEffect } from "react";
import { api } from "../services/api";

export default function TagManager() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  useEffect(() => { api.getTags().then(setTags); }, []);

  const add = async () => {
    await api.createTag({ name: newTag });
    setTags(await api.getTags());
    setNewTag("");
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input className="border p-2" value={newTag} onChange={e=>setNewTag(e.target.value)} />
        <button className="border px-4" onClick={add}>Add</button>
      </div>
      <ul className="list-disc pl-4">
        {tags.map(t => <li key={t.id}>{t.name}</li>)}
      </ul>
    </div>
  );
}