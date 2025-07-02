import { categories } from '../data/categories';
import { shops } from '../data/shops';
import { shopCategories } from '../data/shopCategories';
import { products } from '../data/products';
import type { NavItem } from '../data/categories';
import type { Shop } from '../data/shops';
import type { ShopCategory } from '../data/shopCategories';
import type { Product } from '../data/products';

// Data Service Layer - This is where you'll later replace with API calls
export class DataService {
  
  // Categories API
  static async getCategories(): Promise<NavItem[]> {
    // TODO: Replace with actual API call
    // return await fetch('/api/categories').then(res => res.json());
    return Promise.resolve(categories);
  }

  // Shops API
  static async getShopsByCategory(categoryName: string): Promise<Shop[]> {
    // TODO: Replace with actual API call
    // return await fetch(`/api/shops?category=${categoryName}`).then(res => res.json());
    return Promise.resolve(shops[categoryName] || []);
  }

  static async getShopById(shopId: number): Promise<Shop | null> {
    // TODO: Replace with actual API call
    // return await fetch(`/api/shops/${shopId}`).then(res => res.json());
    for (const categoryShops of Object.values(shops)) {
      const shop = categoryShops.find(s => s.id === shopId);
      if (shop) return Promise.resolve(shop);
    }
    return Promise.resolve(null);
  }

  // Shop Categories API
  static async getShopCategories(shopName: string): Promise<ShopCategory[]> {
    // TODO: Replace with actual API call
    // return await fetch(`/api/shops/${shopName}/categories`).then(res => res.json());
    return Promise.resolve(shopCategories[shopName] || []);
  }

  // Products API
  static async getProductsByShopAndCategory(shopName: string, categoryName: string): Promise<Product[]> {
    // TODO: Replace with actual API call
    // return await fetch(`/api/shops/${shopName}/categories/${categoryName}/products`).then(res => res.json());
    const shopProducts = products[shopName];
    if (!shopProducts) return Promise.resolve([]);
    return Promise.resolve(shopProducts[categoryName] || []);
  }

  static async getProductById(productId: string): Promise<Product | null> {
    // TODO: Replace with actual API call
    // return await fetch(`/api/products/${productId}`).then(res => res.json());
    for (const shopProducts of Object.values(products)) {
      for (const categoryProducts of Object.values(shopProducts)) {
        const product = categoryProducts.find(p => p.id === productId);
        if (product) return Promise.resolve(product);
      }
    }
    return Promise.resolve(null);
  }

  static async searchProducts(query: string): Promise<Product[]> {
    // TODO: Replace with actual API call
    // return await fetch(`/api/products/search?q=${query}`).then(res => res.json());
    const allProducts: Product[] = [];
    for (const shopProducts of Object.values(products)) {
      for (const categoryProducts of Object.values(shopProducts)) {
        allProducts.push(...categoryProducts);
      }
    }
    return Promise.resolve(
      allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  // Utility method to get all shops
  static async getAllShops(): Promise<Shop[]> {
    // TODO: Replace with actual API call
    // return await fetch('/api/shops').then(res => res.json());
    const allShops: Shop[] = [];
    for (const categoryShops of Object.values(shops)) {
      allShops.push(...categoryShops);
    }
    return Promise.resolve(allShops);
  }
}