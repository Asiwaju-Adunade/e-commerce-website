
export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  ratings: string;
  brand: string;
  category: string;
};

interface DummyProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  images: string[];
  category: string;
  brand: string;
}

// Shared mapper 
const mapProducts = (products: DummyProduct[]): Product[] => {
  return products.map((item) => ({
    id: item.id.toString(),
    title: item.title,
    description: item.description,
    price: item.price,
    image: item.thumbnail || item.images?.[0] || "/productimages/roundneck.png",
    ratings: item.rating?.toFixed(1) || "0.0",
    brand: item.brand || "Unknown",
    category: item.category,
  }));
};


  //  HOME PAGE (MEN PRODUCTS)
export async function getMenProducts() {
  const categories = [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mens-bags"
  ];

  const requests = categories.map((cat) =>
    fetch(`https://dummyjson.com/products/category/${cat}`).then((res) =>
      res.json()
    )
  );

  const results = await Promise.all(requests);
  const products = results.flatMap((data) => data.products);

  return mapProducts(products);
}


   //   WOMEN PAGE
export async function getWomenProducts() {
  const categories = [
    "womens-dresses",
    "womens-shoes",
    "womens-bags"
  ];

  const requests = categories.map((cat) =>
    fetch(`https://dummyjson.com/products/category/${cat}`).then((res) =>
      res.json()
    )
  );

  const results = await Promise.all(requests);
  const products = results.flatMap((data) => data.products);

  return mapProducts(products);
}

   //  💄 MAKEUP PAGE 
export async function getMakeupProducts() {
  const res = await fetch(
    "https://dummyjson.com/products/category/beauty"
  );

  const data = await res.json();
  return mapProducts(data.products);
}

  //  🌸 PERFUME PAGE
export async function getPerfumeProducts() {
  const res = await fetch(
    "https://dummyjson.com/products/category/fragrances"
  );

  const data = await res.json();
  return mapProducts(data.products);
}

// SEARCH (GLOBAL)
export async function searchProducts(query: string) {
  if (!query.trim()) return [];

  const res = await fetch("https://dummyjson.com/products?limit=200");
  const data = await res.json();

  const search = query.toLowerCase();

  const filtered = data.products.filter((item: DummyProduct) =>
    item.title?.toLowerCase().includes(search) ||
    item.description?.toLowerCase().includes(search) ||
    item.category?.toLowerCase().includes(search) ||
    item.brand?.toLowerCase().includes(search)
  );

  return mapProducts(filtered);
}