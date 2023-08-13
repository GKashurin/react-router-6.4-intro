import Posts from '../components/Posts';
import {getPosts} from "../util/api";
import {useLoaderData} from "react-router-dom";

function BlogPostsPage() {
  const posts = useLoaderData()
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={posts} />
    </>
  );
}

export default BlogPostsPage;

export const loader = () => {
  return getPosts()
}