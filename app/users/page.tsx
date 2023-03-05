import { Metadata } from 'next';
import Link from 'next/link';

import getUsers from '@/lib/users';

export const metadata: Metadata = {
  title: 'Users',
};

const UsersPage = async () => {
  const usersData = getUsers();

  const users = await usersData;
  return (
    <>
      <h1>Users</h1>
      <Link href='/'>Go to HomePage</Link>
      <br />
      <Link href='/about'>Go to About page</Link>
      <hr />
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
          <p>Email: {user.email}</p>
          <br />
        </div>
      ))}
    </>
  );
};

export default UsersPage;
