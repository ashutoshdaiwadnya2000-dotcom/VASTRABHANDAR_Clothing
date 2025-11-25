export type Product = {
  id: number;
  name: string;
  category: 'men' | 'women';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  // Men's Clothing
  {
    id: 1,
    name: 'Classic White T-Shirt',
    category: 'men',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
    description: 'Premium cotton t-shirt with perfect fit',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Slim Fit Denim Jeans',
    category: 'men',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
    description: 'Comfortable slim fit jeans for everyday wear',
    rating: 4.7,
    reviews: 256,
  },
  {
    id: 3,
    name: 'Navy Blue Blazer',
    category: 'men',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1594938291221-94f18e0e1e7a?w=500&h=600&fit=crop',
    description: 'Elegant blazer for formal occasions',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 4,
    name: 'Cotton Polo Shirt',
    category: 'men',
    price: 45.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop',
    description: 'Classic polo shirt in various colors',
    rating: 4.6,
    reviews: 192,
  },
  {
    id: 5,
    name: 'Chino Trousers',
    category: 'men',
    price: 64.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1624378515194-6bdb77a5e94d?w=500&h=600&fit=crop',
    description: 'Smart casual chino trousers',
    rating: 4.4,
    reviews: 145,
  },
  {
    id: 6,
    name: 'Hooded Sweatshirt',
    category: 'men',
    price: 54.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
    description: 'Warm and cozy hoodie for casual days',
    rating: 4.5,
    reviews: 203,
  },
  // Women's Clothing
  {
    id: 7,
    name: 'Floral Summer Dress',
    category: 'women',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
    description: 'Beautiful floral print summer dress',
    rating: 4.7,
    reviews: 312,
  },
  {
    id: 8,
    name: 'High-Waisted Skinny Jeans',
    category: 'women',
    price: 74.99,
    originalPrice: 94.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop',
    description: 'Comfortable high-waisted jeans with stretch',
    rating: 4.6,
    reviews: 278,
  },
  {
    id: 9,
    name: 'Elegant Blouse',
    category: 'women',
    price: 49.99,
    originalPrice: 64.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    description: 'Sophisticated blouse for office wear',
    rating: 4.5,
    reviews: 167,
  },
  {
    id: 10,
    name: 'Leather Jacket',
    category: 'women',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
    description: 'Stylish faux leather jacket',
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 11,
    name: 'Maxi Skirt',
    category: 'women',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=600&fit=crop',
    description: 'Flowing maxi skirt for elegant look',
    rating: 4.6,
    reviews: 198,
  },
  {
    id: 12,
    name: 'Knit Sweater',
    category: 'women',
    price: 64.99,
    originalPrice: 84.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
    description: 'Cozy knit sweater for winter',
    rating: 4.7,
    reviews: 234,
  },
];

export function getProductsByCategory(category: 'men' | 'women' | 'all'): Product[] {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
}

