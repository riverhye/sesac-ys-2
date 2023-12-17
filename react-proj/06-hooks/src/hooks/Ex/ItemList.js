import { useCallback, useState } from 'react';

export default function ItemList() {
  const [items, setItems] = useState(['item 1', 'item 2', 'item 3']);
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const edit = useCallback((item) => {
    setEditing(item);
    setEditText(item);
  }, []);

  const del = useCallback(
    (itemToDel) => {
      setItems(items.filter((item) => item !== itemToDel));
    },
    [items]
  );

  const save = useCallback(
    (itemToSave) => {
      setItems(items.map((item) => (item === editing ? itemToSave : item)));
      // 그냥 save 눌러도 동작하게끔
      setEditing(null);
    },
    [items, editing]
  );

  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {editing === item ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              item
            )}
            {editing === item ? (
              <button onClick={() => save(editText)}>Save</button>
            ) : (
              <button onClick={() => edit(item)}>Edit</button>
            )}
            <button onClick={() => del(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
