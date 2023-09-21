import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  if (inventory.length === 0) {
    return 0;
  }

  const totalValue = inventory.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  return totalValue;
}

const inventoryValue: number = calcInventoryValue(inventory);

console.log(inventoryValue);

export { InventoryItem, calcInventoryValue };
