export default function SnippetList({ snippets, onEdit }) {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {snippets.map(sn => (
        <div key={sn.id} className="border p-4 rounded">
          <pre className="whitespace-pre-wrap">{sn.code}</pre>
          <p className="mt-2">{sn.description}</p>
          <div className="flex gap-2 mt-2">
            {sn.tags?.map(t => <span key={t.id} className="text-sm border px-2 py-1">{t.name}</span>)}
          </div>
          <button className="mt-2 underline" onClick={() => onEdit(sn.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}