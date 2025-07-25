import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 Sending login request to backend...");

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("📥 Received response");
      const data = await res.json();
      console.log("🧠 Username received:", data?.user?.username);

      if (!res.ok) throw new Error(data.message || 'Login failed');

      // Save token to localStorage
      localStorage.setItem('token', data.token);

      console.log("✅ Login successful, token:", data.token);
      setTimeout(() => {
         router.push(`/user/${data.user.username}`);
      }, 100);
      // Make sure username exists
      const username = data?.user?.username;
      if (!username) throw new Error("No username returned from backend");

      console.log("👤 Redirecting to:", `/user/${username}`);
      router.push(`/user/${username}`);
    } catch (err) {
      console.error("❌ Login error:", err);
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12 p-4 shadow rounded bg-white">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-4 p-2 border"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;