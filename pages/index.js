import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && password){
      router.push('/dashboard');
    }
  };

  return (
    <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}