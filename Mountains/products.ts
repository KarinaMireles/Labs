interface Product {
  name: string;
  price: number;
}
const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Headphones", price: 100 },
];
function calcAverageProductPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const totalPrices = products.reduce((sum, product) => sum + product.price, 0);
  return totalPrices / products.length;
}
const averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);
export { Product, calcAverageProductPrice };
