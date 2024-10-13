"use client";
import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { Pagination } from "../Pagination";
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
const Posts = (): ReactElement => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): void => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) {
          throw new Error("l'appel à l'api n'a pu aboutir");
        }
        const posts = (await response.json()) as Post[];
        setPosts(posts);
        return posts;
      } catch (e) {
        console.log(e);
        setError("error");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="overflow-hidden">
      {!!error && <h1>ERROR: {JSON.stringify(error)}</h1>}
      {!error && loading ? (
        <h1>LOADING MAN ...</h1>
      ) : (
        <Pagination itemsPerPage={5}>
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="flex flex-col items-center gap-2 px-4 py-2 text-white"
              >
                <h1 className="text-2xl">
                  {post.id} - {post.title}
                </h1>
                <p>{post.body}</p>
              </div>
            );
          })}
        </Pagination>
      )}
    </div>
  );
};
export { Posts };
