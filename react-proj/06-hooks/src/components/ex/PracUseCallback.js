import { useCallback, useState } from 'react';

export default function PracUseCallback() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = useCallback((item) => {
    setEdit(item);
    setEditText(item);
  }, []);

  const handleSave = useCallback(
    (itemToSave) => {
      setItems(items.map((item) => (item === edit ? itemToSave : item)));
      setEdit(null);
    },
    [edit, items]
  );

  const handleDelete = useCallback(
    (thisItem) => {
      // Implement delete logic here]
      setItems(items.filter((item) => item !== thisItem));
    },
    [items]
  );

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {edit === item ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              item
            )}
            {edit === item ? (
              <button onClick={() => handleSave(editText)}>Save</button>
            ) : (
              <>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
