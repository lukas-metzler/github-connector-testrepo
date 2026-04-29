"""Unit tests for the Fibonacci calculator module."""

import unittest
from fibonacci import fibonacci, fibonacci_sequence


class TestFibonacci(unittest.TestCase):
    """Test cases for the fibonacci function."""
    
    def test_fibonacci_base_cases(self):
        """Test the base cases of the Fibonacci sequence."""
        self.assertEqual(fibonacci(0), 0)
        self.assertEqual(fibonacci(1), 1)
    
    def test_fibonacci_sequence(self):
        """Test known Fibonacci numbers."""
        expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
        for i, expected_value in enumerate(expected):
            self.assertEqual(fibonacci(i), expected_value)
    
    def test_fibonacci_negative_input(self):
        """Test that negative input raises ValueError."""
        with self.assertRaises(ValueError):
            fibonacci(-1)
        with self.assertRaises(ValueError):
            fibonacci(-5)
    
    def test_fibonacci_large_numbers(self):
        """Test Fibonacci calculation for larger indices."""
        self.assertEqual(fibonacci(10), 55)
        self.assertEqual(fibonacci(15), 610)
        self.assertEqual(fibonacci(20), 6765)


class TestFibonacciSequence(unittest.TestCase):
    """Test cases for the fibonacci_sequence function."""
    
    def test_sequence_empty(self):
        """Test generating 0 Fibonacci numbers."""
        self.assertEqual(fibonacci_sequence(0), [])
    
    def test_sequence_small(self):
        """Test generating a small sequence."""
        expected = [0, 1, 1, 2, 3, 5]
        self.assertEqual(fibonacci_sequence(6), expected)
    
    def test_sequence_length(self):
        """Test that the sequence has the correct length."""
        for n in [1, 5, 10, 15]:
            self.assertEqual(len(fibonacci_sequence(n)), n)
    
    def test_sequence_negative_input(self):
        """Test that negative input raises ValueError."""
        with self.assertRaises(ValueError):
            fibonacci_sequence(-1)
        with self.assertRaises(ValueError):
            fibonacci_sequence(-10)
    
    def test_sequence_first_ten(self):
        """Test the first 10 Fibonacci numbers."""
        expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
        self.assertEqual(fibonacci_sequence(10), expected)


if __name__ == "__main__":
    unittest.main()
