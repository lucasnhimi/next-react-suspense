type User = {
  id: number;
  name: string;
};

const getUsers = async (timeout: number) => {
  // settimeout is just to simulate a slow request
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  return users;
};

export default async function UserList({
  timeout = 1000,
}: {
  timeout?: number;
}) {
  const users = await getUsers(timeout);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
