import React, { JSX } from "react";
import Feed from "@/components/Feed";

export default function Home(): JSX.Element {
  return (
    <div className="max-w-screen-md mx-auto px-4">
      <Feed />
    </div>
  );
}