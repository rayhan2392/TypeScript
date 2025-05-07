interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  const expensiveProducts = products.reduce((prev, current) => {
    if (current.price > prev.price) {
      return current;
    } else {
      return prev;
    }
  });
  return expensiveProducts;
}
