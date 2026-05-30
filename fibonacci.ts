/**
 * Calculates the Fibonacci number at a given position
 * @param n - The position in the Fibonacci sequence (0-indexed)
 * @returns The Fibonacci number at position n
 */
export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error("Fibonacci index cannot be negative");
  }

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
 * Calculates the first n Fibonacci numbers
 * @param count - The number of Fibonacci numbers to generate
 * @returns An array containing the first n Fibonacci numbers
 */
export function fibonacciSequence(count: number): number[] {
  if (count < 0) {
    throw new Error("Count cannot be negative");
  }

  if (count === 0) {
    return [];
  }

  const sequence: number[] = [0];

  if (count === 1) {
    return sequence;
  }

  sequence.push(1);

  for (let i = 2; i < count; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Example usage
console.log(`Fibonacci(25) = ${fibonacci(25)}`);
console.log(`First 10 Fibonacci numbers: ${fibonacciSequence(10).join(", ")}`);
