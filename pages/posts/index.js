import Head from "next/head";

import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/posts-util";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of programming-related totourials and posts."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
