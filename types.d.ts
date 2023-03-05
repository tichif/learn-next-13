interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
