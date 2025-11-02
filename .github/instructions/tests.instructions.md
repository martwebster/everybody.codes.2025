applyTo: '**/*test.ts'
Test files must follow these guidelines:

1. Use Vitest for all test definitions (`import { test, describe, expect } from 'vitest'`).
2. Import any required utility extensions at the top (e.g., `import '../utility/extensions';`).
3. If test data is needed, use a helper like `readTestData` to load it from a file.
4. Group related tests using `describe`, with a descriptive label (e.g., `describe('day x', ...)`).
5. Each test should use `test('name', ...)` and include clear assertions with `expect`.
6. For tests that process data, use array methods and extensions (e.g., `.map`, `.sum`) for clarity and conciseness.
7. Always check expected outputs with `expect(...).toBe(...)` or similar assertions.
8. Keep tests deterministic and avoid side effects.
9. Prefer small, focused test cases over large, complex ones.
10. Name test files as `<module>.test.ts` and place them next to the module under test.

Example structure:

```typescript
import '../utility/extensions';
import { test, describe, expect } from 'vitest';
import { readTestData } from '../utility/fileHelper';
import { exampleFunction } from './dayx';

describe('day x', () => {
	test('sample', () => {
		expect(exampleFunction('1')).toBe(1);
	});

	test('part1', () => {
		const data = readTestData('./src/dayx/notes1.txt');
		const sum = data.map(line => exampleFunction(line)).sum();
		expect(sum).toBe(6);
	});
});
```