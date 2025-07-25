'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Post = {
  id: string;
  image: string;
  caption: string;
};

const UserPage = () => {
  const params = useParams();
  const username = typeof params?.username === 'string' ? params.username : '';

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Mock fetch
    const fakePosts = Array.from({ length: 6 }).map((_, i) => ({
      id: `${i}`,
      image: `https://picsum.photos/seed/${username + i}/500/500`,
      caption: `Fake post #${i + 1}`,
    }));
    setPosts(fakePosts);
  }, [username]);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome, {username}!</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded shadow overflow-hidden">
            <Image
              src={post.image}
              alt={`Post by ${username}`}
              width={500}
              height={500}
              className="w-full"
            />
            <div className="p-2 text-sm text-gray-700">{post.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;