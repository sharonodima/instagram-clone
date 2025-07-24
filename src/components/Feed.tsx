'use client';

import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";

type Post = {
  id: string;
  username: string;
  avatar: string;
  postImage: string;
};

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fakePosts: Post[] = Array.from({ length: 12 }).map(() => ({
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      postImage: faker.image.urlPicsumPhotos({ width: 500, height: 500 }),
    }));

    setPosts(fakePosts);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded shadow overflow-hidden hover:scale-[1.01] transition-transform"
        >
          <div className="flex items-center p-3 gap-3">
            <Image
              src={post.avatar}
              alt={post.username}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold">{post.username}</p>
          </div>
          <Image
            src={post.postImage}
            alt={`Post by ${post.username}`}
            width={500}
            height={500}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Feed;