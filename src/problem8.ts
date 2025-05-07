async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    return Promise.reject(new Error("Negative Number not allowed"));
  }

  const delay = new Promise<void>((resolve) => setTimeout(resolve, 1000));
  await delay;
  return n * n;
}

