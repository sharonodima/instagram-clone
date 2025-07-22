"use client";

import { FaHeart, FaRegComment } from "react-icons/fa";
import { faker } from "@faker-js/faker";
import Image from "next/image";

export default function Feed() {
  // Generate an array of 12 fake posts
 const posts = Array.from({ length: 12 }).map(() => ({
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
  postImage: faker.image.urlPicsumPhotos({ width: 500, height: 500 }),
  comments: [
    {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      text: faker.lorem.sentence(),
    },
    {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      text: faker.lorem.sentence(),
    },
  ],
}));

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">

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
      width={32}
      height={32}
      className="rounded-full"
    />
    <p className="text-sm font-medium">{post.username}</p>
  </div>
  <Image
    src={post.postImage}
    alt={`Post by ${post.username}`}
    width={500}
    height={500}
    className="w-full object-cover"
  />
  {/* Icons */}
  <div className="flex items-center justify-between p-3 text-gray-600 text-sm">
    <div className="flex items-center gap-4">
      <button className="hover:text-red-500 transition">
        <FaHeart />
      </button>
      <button className="hover:text-blue-500 transition">
        <FaRegComment />
      </button>
    </div>
  </div>
  {/* Icons */}
  <div className="px-3 pb-3 text-sm text-gray-700 space-y-1">
    {post.comments.map((comment) => (
    <p key={comment.id}>
        <span className="font-medium">{comment.username}</span>{" "}
        {comment.text}
    </p>
    ))}
  </div>
</div>
        ))}
      </div>
    </div>
  );
}