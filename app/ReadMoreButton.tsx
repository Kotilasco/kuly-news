"use client";

type Props = {
  article: Article;
};
import { useRouter } from "next/navigation";
import React from "react";

function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  const handleclick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };
  return (
    <button
      onClick={handleclick}
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
