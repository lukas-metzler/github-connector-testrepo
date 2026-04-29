"""Fibonacci number calculator module."""


def fibonacci(n: int) -> int:
    """
    Calculate the nth Fibonacci number.
    
    The Fibonacci sequence starts with 0 and 1, and each subsequent number
    is the sum of the previous two numbers.
    
    Args:
        n: The position in the Fibonacci sequence (0-indexed)
    
    Returns:
        The nth Fibonacci number
    
    Raises:
        ValueError: If n is negative
    """
    if n < 0:
        raise ValueError("n must be non-negative")
    
    if n <= 1:
        return n
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    
    return b


def fibonacci_sequence(n: int) -> list[int]:
    """
    Generate the first n Fibonacci numbers.
    
    Args:
        n: The number of Fibonacci numbers to generate
    
    Returns:
        A list containing the first n Fibonacci numbers
    
    Raises:
        ValueError: If n is negative
    """
    if n < 0:
        raise ValueError("n must be non-negative")
    
    sequence = []
    for i in range(n):
        sequence.append(fibonacci(i))
    
    return sequence
