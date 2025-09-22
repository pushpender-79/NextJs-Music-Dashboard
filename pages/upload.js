import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Upload() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', artist: '', releaseDate: '', genre: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/tracks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).then(() => router.push('/dashboard'));
  };

  return (
    <div className="container">
      <h2>Upload Track</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Track Title" onChange={handleChange} required />
        <input name="artist" placeholder="Artist Name" onChange={handleChange} required />
        <input name="releaseDate" type="date" onChange={handleChange} required />
        <input name="genre" placeholder="Genre" onChange={handleChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}