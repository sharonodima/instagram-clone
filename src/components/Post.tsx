import Image from "next/image";

type PostProps = {
  username: string;
  userImg: string;
  postImg: string;
};

export default function Post({ username, userImg, postImg }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Top: Profile */}
      <div className="flex items-center space-x-2 mb-3">
        <Image
          src={userImg}
          alt={`${username}'s profile picture`}
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-semibold text-sm">{username}</span>
      </div>

      {/* Middle: Post Image */}
      <div className="w-full aspect-square bg-gray-200 relative">
        <Image
          src={postImg}
          alt="Post image"
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Bottom: Actions (fake icons for now) */}
      <div className="flex justify-start gap-4 mt-3 text-gray-600 text-sm">
        ❤️ Like &nbsp;&nbsp; 💬 Comment
      </div>
    </div>
  );
}