type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};
const listProduct: Product[] = [
  {
    id: "P001",
    name: "Áo sơ mi",
    price: 300000,
    discount: 60000,
    category: {
      id: "C001",
      name: "Thời trang nam"
    }
  },
  {
    id: "P002",
    name: "Giày",
    price: 800000,
    category: {
      id: "C002",
      name: "Giày dép"
    }
  },
  {
    id: "P003",
    name: "Balo",
    price: 500000,
    discount: 50000,
    category: {
      id: "C003",
      name: "Phụ kiện"
    }
  }
];

const getFinalPrice = (product: Product): number => {
  return product.discount ? product.price - product.discount : product.price;
};

const printProductInfo = (product: Product) => {
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
  if (product.discount) {
    console.log(`Giá sau giảm: ${getFinalPrice(product).toLocaleString()} VND`);
  }
  console.log(`Danh mục: ${product.category.name}`);
};

for (const product of listProduct) {
  printProductInfo(product);
}