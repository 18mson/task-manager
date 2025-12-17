export type DummyUser = { email: string; password: string };

const FIXED_DUMMY_USERS: DummyUser[] = [
  { email: 'alice@example.com', password: 'password123' },
  { email: 'bob@example.com', password: 'password123' },
  { email: 'charlie@example.com', password: 'password123' },
  { email: 'diana@example.com', password: 'password123' },
  { email: 'eve@example.com', password: 'password123' },
];

export function getDummyUsers(): DummyUser[] {
  return FIXED_DUMMY_USERS;
}

export function showDummyUsers(): DummyUser[] {
  return getDummyUsers();
}
