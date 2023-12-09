import { useEffect, useState } from 'react';
import AllDetail from '../components/AllDetail';

export default function PhotoPage() {
  const [photo, setPhoto] = useState(null);
  const msg = 'Loading...';

  const getPhotos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await res.json();
    setPhoto(photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      {photo ? (
        <>
          {photo.map((value) => (
            <AllDetail mode="photo" value={value} />
          ))}
        </>
      ) : (
        msg
      )}
    </>
  );
}
