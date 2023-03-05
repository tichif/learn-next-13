interface Props {
  postsData: Promise<Post[]>;
}

const Posts = async ({ postsData }: Props) => {
  const posts = await postsData;
  return (
    <>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <br />
        </article>
      ))}
    </>
  );
};

export default Posts;
