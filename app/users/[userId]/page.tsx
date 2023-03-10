import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import getUsers, { getUser } from '@/lib/users';
import { getUserPosts } from '@/lib/posts';
import Posts from './Posts';

interface Params {
  params: {
    userId: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(params.userId);
  const user: User = await userData;

  if (!user.name) {
    return {
      title: 'User Not Found',
    };
  }

  return { title: user.name, description: `This is the page of ${user.name}` };
}

const UserPage = async ({ params }: Params) => {
  const userData: Promise<User> = getUser(params.userId);
  const postsData: Promise<Post[]> = getUserPosts(params.userId);

  const user: User = await userData;

  if (!user.name) return notFound();

  return (
    <div>
      <Link href='/users'> Go to Users page</Link>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <Posts postsData={postsData} />
      </Suspense>
    </div>
  );
};

// SSG => Static site generation
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getUsers();
  const users: User[] = await usersData;

  return users.map((user) => ({
    // you should return all your number in string format
    // because URL params is always string
    userId: user.id.toString(),
  }));
}

export default UserPage;
