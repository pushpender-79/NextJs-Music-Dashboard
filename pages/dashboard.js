// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// export default function Dashboard() {
//   const [tracks, setTracks] = useState([]);

//   useEffect(() => {
//     fetch('/api/tracks').then(res => res.json()).then(data => setTracks(data));
//   }, []);

//   return (
//     <div className="container">
//       <h2>Dashboard</h2>
//       <Link href="/upload">Upload Track</Link>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Artist</th>
//             <th>Release Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tracks.map(track => (
//             <tr key={track.id}>
//               <td data-label="Title"><Link href={`/track/${track.id}`}>{track.title}</Link></td>
//               <td data-label="Artist">{track.artist}</td>
//               <td data-label="Release Date">{track.releaseDate}</td>
//               <td data-label="Status">{track.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// export default function Dashboard() {
//   const [tracks, setTracks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch('/api/tracks')
//       .then(res => res.json())
//       .then(data => setTracks(data))
//       .catch(err => console.error(err));
//   }, []);

//   const filteredTracks = tracks.filter(
//     track =>
//       track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       track.artist.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container p-4">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

//       {/* Top controls: Upload and Search */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
//         <Link
//           href="/upload"
//           className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Upload Track
//         </Link>

//         <input
//           type="text"
//           placeholder="Search by title or artist..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border border-gray-300 p-2 rounded w-full md:w-1/3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Title</th>
//             <th className="border px-4 py-2">Artist</th>
//             <th className="border px-4 py-2">Release Date</th>
//             <th className="border px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredTracks.length > 0 ? (
//             filteredTracks.map((track) => (
//               <tr key={track.id}>
//                 <td data-label="Title">
//                   <Link href={`/track/${track.id}`} className="text-blue-600 hover:underline">
//                     {track.title}
//                   </Link>
//                 </td>
//                 <td data-label="Artist">{track.artist}</td>
//                 <td data-label="Release Date">{track.releaseDate}</td>
//                 <td data-label="Status">{track.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4} className="text-center py-4">
//                 No tracks found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// export default function Dashboard() {
//   const [tracks, setTracks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch('/api/tracks')
//       .then(res => res.json())
//       .then(data => setTracks(data))
//       .catch(err => console.error(err));
//   }, []);

//   const filteredTracks = tracks.filter(
//     track =>
//       track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       track.artist.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container p-4">
//       <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

//       {/* Top controls: Upload and Search */}
//       <div className="flex flex-col md:flex-row justify-start items-center mb-6 gap-4">
//         {/* Upload Track Button */}
//         <Link
//           href="/upload"
//           className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Upload Track
//         </Link>

//         {/* Search / Filter Input */}
//         <input
//           type="text"
//           placeholder="Search by title or artist..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border border-gray-300 p-3 rounded w-full md:w-64 bg-yellow-300 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         />
//       </div>

//       {/* Tracks Table */}
//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Title</th>
//             <th className="border px-4 py-2">Artist</th>
//             <th className="border px-4 py-2">Release Date</th>
//             <th className="border px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredTracks.length > 0 ? (
//             filteredTracks.map((track) => (
//               <tr key={track.id}>
//                 <td data-label="Title">
//                   <Link href={`/track/${track.id}`} className="text-blue-600 hover:underline">
//                     {track.title}
//                   </Link>
//                 </td>
//                 <td data-label="Artist">{track.artist}</td>
//                 <td data-label="Release Date">{track.releaseDate}</td>
//                 <td data-label="Status">{track.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4} className="text-center py-4">
//                 No tracks found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }




import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [tracks, setTracks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('/api/tracks')
      .then(res => res.json())
      .then(data => setTracks(data))
      .catch(err => console.error(err));
  }, []);

  const filteredTracks = tracks.filter(
    track =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Dashboard</h2>

      {/* Top controls: Upload and Search */}
      <div className="dashboard-controls">
        <Link href="/upload" className="upload-btn">
          Upload Track
        </Link>

        <input
          type="text"
          placeholder="Search by title or artist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Tracks Table */}
      <table>
        <thead>
          <tr style={{ backgroundColor: "#f3f4f6" }}>
            <th>Title</th>
            <th>Artist</th>
            <th>Release Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTracks.length > 0 ? (
            filteredTracks.map((track) => (
              <tr key={track.id}>
                <td data-label="Title">
                  <Link href={`/track/${track.id}`} style={{ color: "#0070f3", textDecoration: "underline" }}>
                    {track.title}
                  </Link>
                </td>
                <td data-label="Artist">{track.artist}</td>
                <td data-label="Release Date">{track.releaseDate}</td>
                <td data-label="Status">{track.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center", padding: "12px" }}>
                No tracks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


