export default async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    // throw new Error('Unable to fetch data');
    return undefined;
  }

  return res.json();
}

export async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    // throw new Error('Unable to fetch data');
    return undefined;
  }

  return res.json();
}
