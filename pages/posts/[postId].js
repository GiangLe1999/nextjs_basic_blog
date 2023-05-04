import fs from "fs";
import path from "path";

import Head from "next/head";

import PostContent from "@/components/posts/PostDetail/PostContent";
import { getPostData } from "@/lib/posts-util";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const slug = params.postId;
  const fileName = slug + ".md";

  const postData = getPostData(fileName);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postDirectory = path.join(process.cwd(), "content", "posts");
  const postFiles = fs.readdirSync(postDirectory);

  const postFilesWithoutExtension = postFiles.map((postFile) =>
    postFile.replace(/\.md$/, "")
  );

  const paths = postFilesWithoutExtension.map((slug) => {
    return {
      params: {
        postId: slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default PostDetailPage;
