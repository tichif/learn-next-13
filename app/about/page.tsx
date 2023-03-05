import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <br />
      <Link href='/'>Go to homepage</Link>
    </div>
  );
};

export default AboutPage;
