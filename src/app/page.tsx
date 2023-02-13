import { Suspense } from 'react';
import UserList from './UserList';

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading 1...</div>}>
        <h1>User 1</h1>
        {/* @ts-ignore */}
        <UserList />
      </Suspense>
      <Suspense fallback={<div>Loading 2...</div>}>
        <h1>User 2</h1>
        {/* @ts-ignore */}
        <UserList timeout={2000} />
      </Suspense>
      <Suspense fallback={<div>Loading 3...</div>}>
        <h1>User 3</h1>
        {/* @ts-ignore */}
        <UserList timeout={3000} />
      </Suspense>
      <Suspense fallback={<div>Loading 4...</div>}>
        <h1>User 4</h1>
        {/* @ts-ignore */}
        <UserList timeout={4000} />
      </Suspense>
    </main>
  );
}
