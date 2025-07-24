'use client';

import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

type Comment = {
  id: string;
  username: string;
  text: string;
};

type Post = {
  id: string;
  username: string;
  avatar: string;
  postImage: string;
  comments: Comment[];
};

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fakePosts: Post[] = Array.from({ length: 12 }).map(() => ({
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      postImage: faker.image.urlPicsumPhotos({ width: 500, height: 500 }),
      comments: Array.from({ length: Math.floor(Math.random() * 2) + 1 }).map(() => ({
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        text: faker.lorem.sentence(),
      })),
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
          {/* User Info */}
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

          {/* Post Image */}
          <Image
            src={post.postImage}
            alt={`Post by ${post.username}`}
            width={500}
            height={500}
            className="w-full object-cover"
          />

          {/* Action Icons */}
          <div className="flex items-center gap-4 px-4 py-2">
            <Heart className="cursor-pointer hover:text-red-500 transition-colors" />
            <MessageCircle className="cursor-pointer hover:text-blue-500 transition-colors" />
          </div>

          {/* Comments */}
          <div className="px-4 pb-4 space-y-1">
            {post.comments.map((comment) => (
              <div key={comment.id} className="text-sm">
                <span className="font-semibold">{comment.username}</span>{' '}
                <span>{comment.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;