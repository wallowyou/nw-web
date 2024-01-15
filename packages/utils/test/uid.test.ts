import { expect, test } from 'vitest';
import { guid } from '../src/uid';
test('guid', () => {
  expect(guid().length).toBe(12);
});
