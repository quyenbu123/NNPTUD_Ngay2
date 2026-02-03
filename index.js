function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

const products = [
  new Product("P001", "Laptop Pro 16", 42000000, 5, "Máy tính", true),
  new Product("P002", "Wireless Mouse", 450000, 0, "Phụ kiện", false),
  new Product("P003", "Mechanical Keyboard", 1800000, 12, "Phụ kiện", true),
  new Product("P004", "4K Monitor", 9800000, 4, "Màn hình", true),
  new Product("P005", "USB-C Hub", 1200000, 15, "Phụ kiện", true),
  new Product("P006", "Gaming PC", 35000000, 2, "Máy tính", true),
];

const namePriceList = products.map(({ name, price }) => ({ name, price }));
const inStockProducts = products.filter((product) => product.quantity > 0);
const hasExpensiveProduct = products.some((product) => product.price > 30000000);
const allAccessoriesAvailable = products
  .filter((product) => product.category === "Accessories")
  .every((product) => product.isAvailable);
const inventoryValue = products.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

console.log("Câu 3 - Danh sách name/price:");
console.table(namePriceList);

console.log("Câu 4 - Sản phẩm còn hàng (quantity > 0):");
console.table(inStockProducts);

console.log(
  `Câu 5 - Có sản phẩm giá > 30.000.000? ${hasExpensiveProduct}`
);

console.log(
  `Câu 6 - Tất cả Accessories đang bán? ${allAccessoriesAvailable}`
);

console.log(`Câu 7 - Tổng giá trị kho: ${inventoryValue.toLocaleString("vi-VN")}`);

console.log("Câu 8 - Duyệt products (for...of):");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

console.log("Câu 9 - Duyệt thuộc tính (for...in):");
for (const product of products) {
  console.log(`Thuộc tính của ${product.name}:`);
  for (const key in product) {
    console.log(`- ${key}: ${product[key]}`);
  }
}

const sellingAndInStockNames = products
  .filter((product) => product.isAvailable && product.quantity > 0)
  .map((product) => product.name);

console.log("Câu 10 - Tên sản phẩm đang bán và còn hàng:");
console.log(sellingAndInStockNames);
