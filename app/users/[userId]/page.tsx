import { Metadata } from 'next';
import Link from 'next/link';

import { getUser } from '@/lib/users';
import { getUserPosts } from '@/lib/posts';
import Posts from './Posts';

interface Params {
  params: {
    userId: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const user = await getUser(params.userId);
  return { title: user.name };
}

const UserPage = async ({ params }: Params) => {
  const userData = getUser(params.userId);
  const postsData = getUserPosts(params.userId);

  const [user, posts] = await Promise.all([userData, postsData]);

  return (
    <div>
      <Link href='/users'> Go to Users page</Link>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <hr />
      <Posts posts={posts} />
    </div>
  );
};

export default UserPage;
