import { greet } from './index';

test('should greet', () => {
  const greeting = greet('ThoughtWorker');
  expect(greeting).toBe('Hello, ThoughtWorker');
});
