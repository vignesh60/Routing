import Post from './Post'

const Feed = ({posts}) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} posts={post} />
      ))}
    </>
  );
}

export default Feed
