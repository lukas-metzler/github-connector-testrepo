/**
 * Fibonacci Number Calculation Examples in TypeScript
 */

/**
 * Recursive approach to calculate Fibonacci number
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) due to call stack
 * @param n - The position in the Fibonacci sequence
 * @returns The nth Fibonacci number
 */
function fibonacciRecursive(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * Iterative approach to calculate Fibonacci number
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param n - The position in the Fibonacci sequence
 * @returns The nth Fibonacci number
 */
function fibonacciIterative(n: number): number {
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}

/**
 * Memoization approach to calculate Fibonacci number
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param n - The position in the Fibonacci sequence
 * @param memo - Cache for storing previously calculated values
 * @returns The nth Fibonacci number
 */
function fibonacciMemo(n: number, memo: Map<number, number> = new Map()): number {
  if (memo.has(n)) {
    return memo.get(n)!;
  }

  if (n <= 1) {
    return n;
  }

  const result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}

/**
 * Generator function to yield Fibonacci numbers
 * @param limit - Maximum number of Fibonacci numbers to generate
 */
function* fibonacciGenerator(limit: number) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < limit; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Example usage
console.log("Recursive approach:");
console.log(`fib(10) = ${fibonacciRecursive(10)}`);

console.log("\nIterative approach:");
console.log(`fib(10) = ${fibonacciIterative(10)}`);

console.log("\nMemoization approach:");
console.log(`fib(10) = ${fibonacciMemo(10)}`);

console.log("\nGenerator approach (first 10 Fibonacci numbers):");
const fibs = Array.from(fibonacciGenerator(10));
console.log(fibs);
