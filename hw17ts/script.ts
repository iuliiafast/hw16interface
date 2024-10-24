// Задание 1
function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  const total = price * quantity;
  return total - (total * (discount / 100));
}

// Задание 2
let id: string | number;

function displayId(id: string | number): void {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id * 10);
  }
}

// Задание 3
interface Order {
  orderId: string;
  amount: number;
  status: 'pending' | 'shipped' | 'delivered';
}

const orders: Order[] = [
  { orderId: '1', amount: 100, status: 'pending' },
  { orderId: '2', amount: 200, status: 'shipped' },
  { orderId: '3', amount: 150, status: 'delivered' },
];

function filterOrdersByStatus(orders: Order[], status: 'pending' | 'shipped' | 'delivered'): Order[] {
  return orders.filter(order => order.status === status);
}

// Задание 4
type ProductInfo = [string, number, number];

function updateStock(inventory: Record<string, number>, productInfo: ProductInfo): Record<string, number> {
  const [productName, price, quantity] = productInfo;
  inventory[productName] = (inventory[productName] || 0) + quantity; // Обновляем количество на складе
  return inventory;
}

// Примеры использования
console.log(calculateTotal(100, 2)); // 200
console.log(calculateTotal(100, 2, 10)); // 180

id = 'abc123';
displayId(id); // ABC123

id = 5;
displayId(id); // 50

console.log(filterOrdersByStatus(orders, 'shipped')); // [{ orderId: '2', amount: 200, status: 'shipped' }]

const inventory = {
  'apple': 50,
  'banana': 30
};

const productInfo: ProductInfo = ['apple', 1.2, 20];
const updatedInventory = updateStock(inventory, productInfo);

console.log(updatedInventory); // { apple: 70, banana: 30 }
