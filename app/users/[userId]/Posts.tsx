interface Props {
  posts: Post[];
}

const Posts = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <br />
        </>
      ))}
    </>
  );
};

export default Posts;
