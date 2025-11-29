export default function TagSelector({ tags, selected, onChange }) {
  const toggle = (id) => {
    if (selected.includes(id)) onChange(selected.filter(t => t !== id));
    else onChange([...selected, id]);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map(t => (
        <button key={t.id}
          onClick={() => toggle(t.id)}
          className={`border px-2 py-1 ${selected.includes(t.id) ? 'bg-gray-300' : ''}`}>
          {t.name}
        </button>
      ))}
    </div>
  );
}