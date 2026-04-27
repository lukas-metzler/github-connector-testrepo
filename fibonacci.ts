/**
 * Calculate the nth Fibonacci number
 * @param n - The position in the Fibonacci sequence
 * @returns The Fibonacci number at position n
 */
function fibonacci(n: number): number {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Calculate the nth Fibonacci number using iteration (more efficient)
 * @param n - The position in the Fibonacci sequence
 * @returns The Fibonacci number at position n
 */
function fibonacciIterative(n: number): number {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
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
 * Calculate Fibonacci numbers up to n and return them as an array
 * @param n - The number of Fibonacci numbers to generate
 * @returns An array of the first n Fibonacci numbers
 */
function fibonacciSequence(n: number): number[] {
  const sequence: number[] = [];

  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciIterative(i));
  }

  return sequence;
}

// Examples
console.log("Recursive approach:");
console.log(`fibonacci(10) = ${fibonacci(10)}`); // 55

console.log("\nIterative approach:");
console.log(`fibonacciIterative(10) = ${fibonacciIterative(10)}`); // 55

console.log("\nFirst 15 Fibonacci numbers:");
console.log(fibonacciSequence(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
