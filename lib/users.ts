export default async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Unable to fetch data');
  }

  return res.json();
}

export async function getUser(userId: string): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error('Unable to fetch data');
  }

  return res.json();
}
