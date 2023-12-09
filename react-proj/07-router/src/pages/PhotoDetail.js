import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';

export default function PhotoDetail() {
  const [photo, setPhoto] = useState(null);

  const { id } = useParams();
  const getPhoto = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    const resPhoto = await res.json();
    setPhoto(resPhoto);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <>
      <ul>{photo ? <Detail mode="photo" photo={photo} /> : 'Loading...'}</ul>
    </>
  );
}
