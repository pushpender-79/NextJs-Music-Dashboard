import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TrackDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState(null);

  useEffect(() => {
    if(id){
      fetch(`/api/tracks?id=${id}`).then(res => res.json()).then(data => setTrack(data));
    }
  }, [id]);

  if(!track) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{track.title}</h2>
      <p><b>Artist:</b> {track.artist}</p>
      <p><b>Release Date:</b> {track.releaseDate}</p>
      <p><b>Genre:</b> {track.genre}</p>
      <p><b>Status:</b> {track.status}</p>
    </div>
  );
}