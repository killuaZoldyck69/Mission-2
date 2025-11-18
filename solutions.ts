type DataType = string | number | boolean;
function formatValue(value: DataType): DataType {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | unknown[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};
function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  console.log(book);
}

type ArrayType = string | number;
function getUniqueValues(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const uniqueElement: ArrayType[] = [];
  const seen: Record<ArrayType, boolean> = {};

  const processArray = (arr: ArrayType[]) => {
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i] as ArrayType;
      if (!seen[value]) {
        seen[value] = true;
        uniqueElement.push(value);
      }
    }
  };

  processArray(arr1);
  processArray(arr2);

  return uniqueElement;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
function calculateTotalPrice(products: Product[]): number {
  return products.reduce((totalPrice: number, product: Product) => {
    if ("discount" in product) {
      let discountPrice =
        product.price - (product.price * product.discount) / 100;
      totalPrice = totalPrice + discountPrice * product.quantity;
    } else {
      totalPrice = totalPrice + product.price * product.quantity;
    }
    return totalPrice;
  }, 0);
}
