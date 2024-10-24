// Задание 1 Типизация функции с несколькими параметрами
function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    var total = price * quantity;
    return total - (total * (discount / 100));
}
// Задание 2 Использование Union типов
var id;
function displayId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id * 10);
    }
}

//Задание 3 Объявление и типизация массивов объектов

var orders = [
    { orderId: '1', amount: 100, status: 'pending' },
    { orderId: '2', amount: 200, status: 'shipped' },
    { orderId: '3', amount: 150, status: 'delivered' },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(function (order) { return order.status === status; });
}
function updateStock(inventory, productInfo) {
    var productName = productInfo[0], price = productInfo[1], quantity = productInfo[2];
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
var inventory = {
    'apple': 50,
    'banana': 30
};

// Задание 4 Работа с кортежами и объектами

var productInfo = ['apple', 1.2, 20];
var updatedInventory = updateStock(inventory, productInfo);
console.log(updatedInventory); // { apple: 70, banana: 30 }
