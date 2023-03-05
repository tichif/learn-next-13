import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <br />
      <Link href='/about'>Go to About page</Link> <br />
      <Link href='/users'>Go to Users page</Link>
    </main>
  );
}
