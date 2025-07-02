export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  description: string;
  rating: number;
  inStock: boolean;
  shopName: string;
  shopCategory: string;
}

export const products: Record<string, Record<string, Product[]>> = {
  "FreshMart Supermarket": {
    "Grocery": [
      { 
        id: "rice-5kg", 
        name: "Organic Rice 5kg", 
        price: 12.99, 
        unit: "per bag", 
        image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Grains", 
        description: "Premium organic basmati rice", 
        rating: 4.8, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Grocery"
      },
      { 
        id: "milk-1l", 
        name: "Fresh Milk 1L", 
        price: 3.49, 
        unit: "per bottle", 
        image: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Dairy", 
        description: "Farm fresh whole milk", 
        rating: 4.7, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Grocery"
      },
      { 
        id: "bread-wheat", 
        name: "Whole Wheat Bread", 
        price: 2.99, 
        unit: "per loaf", 
        image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Bakery", 
        description: "Freshly baked whole wheat bread", 
        rating: 4.6, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Grocery"
      },
      { 
        id: "coffee-500g", 
        name: "Premium Coffee 500g", 
        price: 8.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Beverages", 
        description: "Arabica coffee beans", 
        rating: 4.9, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Grocery"
      },
      { 
        id: "olive-oil", 
        name: "Extra Virgin Olive Oil", 
        price: 15.99, 
        unit: "per bottle", 
        image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400", 
        category: "Cooking Oil", 
        description: "Cold pressed olive oil", 
        rating: 4.8, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Grocery"
      },
      { 
        id: "pasta-collection", 
        name: "Pasta Collection", 
        price: 4.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Pasta", 
        description: "Assorted pasta varieties", 
        rating: 4.5, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Grocery"
      },
      { 
        id: "eggs-12", 
        name: "Fresh Eggs (12 pcs)", 
        price: 4.49, 
        unit: "per dozen", 
        image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Dairy", 
        description: "Free-range chicken eggs", 
        rating: 4.7, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Grocery"
      },
      { 
        id: "basmati-2kg", 
        name: "Basmati Rice 2kg", 
        price: 7.99, 
        unit: "per bag", 
        image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Grains", 
        description: "Premium basmati rice", 
        rating: 4.8, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Grocery"
      }
    ],
    "Snacks": [
      { 
        id: "mixed-nuts", 
        name: "Mixed Nuts 250g", 
        price: 6.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Healthy Snacks", 
        description: "Premium mixed nuts", 
        rating: 4.6, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Snacks"
      },
      { 
        id: "chocolate-cookies", 
        name: "Chocolate Cookies", 
        price: 3.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Sweet Snacks", 
        description: "Homemade chocolate cookies", 
        rating: 4.5, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Snacks"
      },
      { 
        id: "potato-chips", 
        name: "Potato Chips", 
        price: 2.49, 
        unit: "per bag", 
        image: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Crispy Snacks", 
        description: "Crispy potato chips", 
        rating: 4.3, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Snacks"
      },
      { 
        id: "granola-bars", 
        name: "Granola Bars (6 pack)", 
        price: 5.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Energy Bars", 
        description: "Healthy granola bars", 
        rating: 4.7, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Snacks"
      },
      { 
        id: "popcorn-variety", 
        name: "Popcorn Variety Pack", 
        price: 4.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=400", 
        category: "Movie Snacks", 
        description: "Assorted popcorn flavors", 
        rating: 4.4, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Snacks"
      },
      { 
        id: "trail-mix", 
        name: "Trail Mix", 
        price: 7.49, 
        unit: "per bag", 
        image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Healthy Snacks", 
        description: "Nuts, seeds and dried fruits", 
        rating: 4.6, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Snacks"
      }
    ],
    "Cool Drinks": [
      { 
        id: "coca-cola", 
        name: "Coca Cola 330ml", 
        price: 1.99, 
        unit: "per can", 
        image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Soft Drinks", 
        description: "Classic Coca Cola", 
        rating: 4.5, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Cool Drinks"
      },
      { 
        id: "orange-juice", 
        name: "Orange Juice 1L", 
        price: 3.99, 
        unit: "per bottle", 
        image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Fruit Juices", 
        description: "Fresh orange juice", 
        rating: 4.7, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Cool Drinks"
      },
      { 
        id: "sparkling-water", 
        name: "Sparkling Water 500ml", 
        price: 1.49, 
        unit: "per bottle", 
        image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Water", 
        description: "Natural sparkling water", 
        rating: 4.4, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Cool Drinks"
      },
      { 
        id: "energy-drink", 
        name: "Energy Drink 250ml", 
        price: 2.99, 
        unit: "per can", 
        image: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Energy Drinks", 
        description: "High energy drink", 
        rating: 4.2, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Cool Drinks"
      },
      { 
        id: "iced-tea", 
        name: "Iced Tea Lemon", 
        price: 2.49, 
        unit: "per bottle", 
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Tea", 
        description: "Refreshing lemon iced tea", 
        rating: 4.3, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Cool Drinks"
      },
      { 
        id: "sports-drink", 
        name: "Sports Drink 500ml", 
        price: 2.79, 
        unit: "per bottle", 
        image: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Sports Drinks", 
        description: "Electrolyte sports drink", 
        rating: 4.1, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Cool Drinks"
      }
    ],
    "Dairy": [
      { 
        id: "yogurt-greek", 
        name: "Greek Yogurt 500g", 
        price: 4.99, 
        unit: "per container", 
        image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Dairy", 
        description: "Creamy Greek yogurt", 
        rating: 4.8, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Dairy"
      },
      { 
        id: "cheese-cheddar", 
        name: "Cheddar Cheese 200g", 
        price: 5.49, 
        unit: "per block", 
        image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Dairy", 
        description: "Aged cheddar cheese", 
        rating: 4.7, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Dairy"
      },
      { 
        id: "butter-unsalted", 
        name: "Unsalted Butter 250g", 
        price: 3.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Dairy", 
        description: "Fresh unsalted butter", 
        rating: 4.6, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Dairy"
      }
    ],
    "Bakery": [
      { 
        id: "croissants", 
        name: "Fresh Croissants (4 pcs)", 
        price: 6.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Bakery", 
        description: "Buttery croissants", 
        rating: 4.8, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Bakery"
      },
      { 
        id: "bagels", 
        name: "Everything Bagels (6 pcs)", 
        price: 4.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Bakery", 
        description: "Fresh everything bagels", 
        rating: 4.5, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Bakery"
      },
      { 
        id: "muffins", 
        name: "Blueberry Muffins (4 pcs)", 
        price: 5.99, 
        unit: "per pack", 
        image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Bakery", 
        description: "Fresh blueberry muffins", 
        rating: 4.7, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Bakery"
      }
    ],
    "Frozen": [
      { 
        id: "ice-cream-vanilla", 
        name: "Vanilla Ice Cream 1L", 
        price: 7.99, 
        unit: "per tub", 
        image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Frozen", 
        description: "Premium vanilla ice cream", 
        rating: 4.6, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Frozen"
      },
      { 
        id: "frozen-pizza", 
        name: "Margherita Pizza", 
        price: 8.99, 
        unit: "per pizza", 
        image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Frozen", 
        description: "Frozen margherita pizza", 
        rating: 4.3, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Frozen"
      },
      { 
        id: "frozen-vegetables", 
        name: "Mixed Vegetables 500g", 
        price: 3.99, 
        unit: "per bag", 
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400", 
        category: "Frozen", 
        description: "Frozen mixed vegetables", 
        rating: 4.4, 
        inStock: true,
        shopName: "FreshMart Supermarket",
        shopCategory: "Frozen"
      }
    ]
  },
  // Add similar structure for other shops...
  "Prime Cuts Butchery": {
    "Chicken": [
      {
        id: 'chicken-breast',
        name: 'Chicken Breast',
        price: 12.99,
        unit: 'per lb',
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Fresh, boneless chicken breast',
        rating: 4.8,
        inStock: true,
        category: 'Chicken',
        shopName: "Prime Cuts Butchery",
        shopCategory: "Chicken"
      },
      {
        id: 'chicken-thigh',
        name: 'Chicken Thigh',
        price: 8.99,
        unit: 'per lb',
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Juicy chicken thighs with bone',
        rating: 4.6,
        inStock: true,
        category: 'Chicken',
        shopName: "Prime Cuts Butchery",
        shopCategory: "Chicken"
      },
      {
        id: 'whole-chicken',
        name: 'Whole Chicken',
        price: 15.99,
        unit: 'each',
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Fresh whole chicken, farm raised',
        rating: 4.9,
        inStock: true,
        category: 'Chicken',
        shopName: "Prime Cuts Butchery",
        shopCategory: "Chicken"
      },
      {
        id: 'chicken-wings',
        name: 'Chicken Wings',
        price: 10.99,
        unit: 'per lb',
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Perfect for grilling and frying',
        rating: 4.7,
        inStock: true,
        category: 'Chicken',
        shopName: "Prime Cuts Butchery",
        shopCategory: "Chicken"
      }
    ],
    "Mutton": [
      {
        id: 'lamb-chops',
        name: 'Lamb Chops',
        price: 24.99,
        unit: 'per lb',
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Premium lamb chops, tender and flavorful',
        rating: 4.9,
        inStock: true,
        category: 'Mutton',
        shopName: "Prime Cuts Butchery",
        shopCategory: "Mutton"
      },
      {
        id: 'leg-of-lamb',
        name: 'Leg of Lamb',
        price: 19.99,
        unit: 'per lb',
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Perfect for roasting, bone-in',
        rating: 4.8,
        inStock: true,
        category: 'Mutton',
        shopName: "Prime Cuts Butchery",
        shopCategory: "Mutton"
      },
      {
        id: 'ground-lamb',
        name: 'Ground Lamb',
        price: 16.99,
        unit: 'per lb',
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Fresh ground lamb, 85% lean',
        rating: 4.6,
        inStock: true,
        category: 'Mutton',
        shopName: "Prime Cuts Butchery",
        shopCategory: "Mutton"
      },
      {
        id: 'lamb-shoulder',
        name: 'Lamb Shoulder',
        price: 18.99,
        unit: 'per lb',
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Slow-cook perfect lamb shoulder',
        rating: 4.7,
        inStock: false,
        category: 'Mutton',
        shopName: "Prime Cuts Butchery",
        shopCategory: "Mutton"
      }
    ]
    // Add other categories for this shop...
  }
  // Add other shops...
};