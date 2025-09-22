let tracks = [
  { id: 1, title: 'Song A', artist: 'Artist A', releaseDate: '2025-01-01', genre: 'Pop', status: 'Published' },
  { id: 2, title: 'Song B', artist: 'Artist B', releaseDate: '2025-02-01', genre: 'Rock', status: 'Draft' }
];

export default function handler(req, res) {
  if(req.method === 'GET'){
    const { id } = req.query;
    if(id){
      const track = tracks.find(t => t.id == id);
      res.status(200).json(track);
    } else {
      res.status(200).json(tracks);
    }
  }
  else if(req.method === 'POST'){
    const newTrack = { id: tracks.length + 1, status: 'Draft', ...req.body };
    tracks.push(newTrack);
    res.status(201).json(newTrack);
  }
}