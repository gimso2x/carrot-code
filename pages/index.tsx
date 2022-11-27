import TweetUpload from "@/components/tweetUpload";
import useUser from "@/lib/client/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";

export default () => {
  const { user, error } = useUser();

  const router = useRouter();
  useEffect(() => {
    if (!user && error) {
      router.replace("/create-account");
    }
  }, [user, error, router]);
  const { data, mutate } = useSWR("/api/tweet");

  return (
    <div>
      <button
        onClick={() =>
          fetch("/api/login-out", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => {
            router.replace("/create-account");
          })
        }
      >
        Logout
      </button>
      <TweetUpload mutate={mutate} />
      {user &&
        data?.tweets.map((tweet, idx) => (
          <Link href={`/tweet/${tweet.id}`}>
            <div key={idx} className="tweet">
              <div>내용 : {tweet.content}</div>
              <div>작성자:{tweet.user.name}</div>
            </div>
          </Link>
        ))}
      <style jsx>{`
        .tweet {
          padding: 5px;
          border: 3px solid #888;
          margin-bottom: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
