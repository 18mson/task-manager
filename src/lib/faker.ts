import { faker } from '@faker-js/faker';

export type DummyUser = { email: string; password: string };

export function getDummyUsers(count: number = 5): DummyUser[] {
  const stored = localStorage.getItem('dummyUsers');
  if (stored) return JSON.parse(stored);
  const users = Array.from({ length: count }, () => ({
    email: faker.internet.email(),
    password: faker.internet.password(),
  }));
  localStorage.setItem('dummyUsers', JSON.stringify(users));
  return users;
}

export function showDummyUsers(): DummyUser[] {
  return getDummyUsers();
}
