export interface ShopCategory {
  name: string;
  url: string;
  icon: string;
}

export const shopCategories: Record<string, ShopCategory[]> = {
  "FreshMart Supermarket": [
    { name: "Grocery", url: "/grocery", icon: "ShoppingBag" },
    { name: "Snacks", url: "/snacks", icon: "Coffee" },
    { name: "Cool Drinks", url: "/cooldrinks", icon: "Zap" },
    { name: "Dairy", url: "/dairy", icon: "ShoppingBag" },
    { name: "Bakery", url: "/bakery", icon: "Coffee" },
    { name: "Frozen", url: "/frozen", icon: "Zap" },
  ],
  "MegaStore Plus": [
    { name: "Grocery", url: "/grocery", icon: "ShoppingBag" },
    { name: "Snacks", url: "/snacks", icon: "Coffee" },
    { name: "Cool Drinks", url: "/cooldrinks", icon: "Zap" },
    { name: "Household", url: "/household", icon: "ShoppingBag" },
    { name: "Personal Care", url: "/personalcare", icon: "Coffee" },
  ],
  "QuickMart Express": [
    { name: "Grocery", url: "/grocery", icon: "ShoppingBag" },
    { name: "Snacks", url: "/snacks", icon: "Coffee" },
    { name: "Cool Drinks", url: "/cooldrinks", icon: "Zap" },
    { name: "Ready Meals", url: "/readymeals", icon: "ShoppingBag" },
  ],
  "GreenGrocer Market": [
    { name: "Organic Grocery", url: "/organic", icon: "ShoppingBag" },
    { name: "Health Snacks", url: "/healthsnacks", icon: "Coffee" },
    { name: "Natural Drinks", url: "/naturaldrinks", icon: "Zap" },
    { name: "Supplements", url: "/supplements", icon: "ShoppingBag" },
  ],
  "HealthCare Plus Pharmacy": [
    { name: "Medicines", url: "/medicines", icon: "ShoppingBag" },
    { name: "Vitamins", url: "/vitamins", icon: "Coffee" },
    { name: "Personal Care", url: "/personalcare", icon: "Zap" },
    { name: "Baby Care", url: "/babycare", icon: "ShoppingBag" },
    { name: "First Aid", url: "/firstaid", icon: "Coffee" },
  ],
  "MediQuick Pharmacy": [
    { name: "Prescription", url: "/prescription", icon: "ShoppingBag" },
    { name: "OTC Medicines", url: "/otc", icon: "Coffee" },
    { name: "Health Devices", url: "/devices", icon: "Zap" },
    { name: "Beauty", url: "/beauty", icon: "ShoppingBag" },
  ],
  "WellCare Drugstore": [
    { name: "Medicines", url: "/medicines", icon: "ShoppingBag" },
    { name: "Wellness", url: "/wellness", icon: "Coffee" },
    { name: "Skincare", url: "/skincare", icon: "Zap" },
    { name: "Nutrition", url: "/nutrition", icon: "ShoppingBag" },
  ],
  "Prime Cuts Butchery": [
    { name: "Chicken", url: "/chicken", icon: "ShoppingBag" },
    { name: "Mutton", url: "/mutton", icon: "Coffee" },
    { name: "Fish", url: "/fish", icon: "Zap" },
    { name: "Beef", url: "/beef", icon: "ShoppingBag" },
    { name: "Pork", url: "/pork", icon: "Coffee" },
    { name: "Prawn", url: "/prawn", icon: "Zap" },
  ],
  "Fresh Meat Market": [
    { name: "Halal Chicken", url: "/halalchicken", icon: "ShoppingBag" },
    { name: "Halal Mutton", url: "/halalmutton", icon: "Coffee" },
    { name: "Fresh Fish", url: "/freshfish", icon: "Zap" },
    { name: "Seafood", url: "/seafood", icon: "ShoppingBag" },
  ],
  "Butcher's Choice": [
    { name: "Premium Cuts", url: "/premium", icon: "ShoppingBag" },
    { name: "Specialty Meats", url: "/specialty", icon: "Coffee" },
    { name: "Marinated", url: "/marinated", icon: "Zap" },
    { name: "Sausages", url: "/sausages", icon: "ShoppingBag" },
  ],
  "TechWorld Electronics": [
    { name: "Smartphones", url: "/smartphones", icon: "Smartphone" },
    { name: "Laptops", url: "/laptops", icon: "ShoppingBag" },
    { name: "Accessories", url: "/accessories", icon: "Coffee" },
    { name: "Audio", url: "/audio", icon: "Zap" },
    { name: "Gaming", url: "/gaming", icon: "ShoppingBag" },
  ],
  "Digital Hub Store": [
    { name: "Computers", url: "/computers", icon: "Smartphone" },
    { name: "Mobile Devices", url: "/mobile", icon: "ShoppingBag" },
    { name: "Cables & Adapters", url: "/cables", icon: "Coffee" },
    { name: "Storage", url: "/storage", icon: "Zap" },
  ],
  "Gadget Galaxy": [
    { name: "Smart Home", url: "/smarthome", icon: "Smartphone" },
    { name: "Wearables", url: "/wearables", icon: "ShoppingBag" },
    { name: "Gaming Gear", url: "/gaminggear", icon: "Coffee" },
    { name: "Tech Gadgets", url: "/gadgets", icon: "Zap" },
  ],
  "Office Essentials Store": [
    { name: "Writing", url: "/writing", icon: "ShoppingBag" },
    { name: "Paper", url: "/paper", icon: "Coffee" },
    { name: "Office Supplies", url: "/office", icon: "Zap" },
    { name: "Storage", url: "/storage", icon: "ShoppingBag" },
  ],
  "Study Corner": [
    { name: "Student Supplies", url: "/student", icon: "ShoppingBag" },
    { name: "Art Supplies", url: "/art", icon: "Coffee" },
    { name: "Books", url: "/books", icon: "Zap" },
    { name: "Educational", url: "/educational", icon: "ShoppingBag" },
  ],
  "Paper & Pen Shop": [
    { name: "Premium Pens", url: "/pens", icon: "ShoppingBag" },
    { name: "Notebooks", url: "/notebooks", icon: "Coffee" },
    { name: "Art Materials", url: "/art", icon: "Zap" },
    { name: "Planners", url: "/planners", icon: "ShoppingBag" },
  ],
  "Garden Fresh Produce": [
    { name: "Fresh Fruits", url: "/fruits", icon: "ShoppingBag" },
    { name: "Vegetables", url: "/vegetables", icon: "Coffee" },
    { name: "Leafy Greens", url: "/greens", icon: "Zap" },
    { name: "Herbs", url: "/herbs", icon: "ShoppingBag" },
  ],
  "Organic Harvest": [
    { name: "Organic Fruits", url: "/organicfruits", icon: "ShoppingBag" },
    { name: "Organic Vegetables", url: "/organicvegetables", icon: "Coffee" },
    { name: "Organic Herbs", url: "/organicherbs", icon: "Zap" },
    { name: "Superfoods", url: "/superfoods", icon: "ShoppingBag" },
  ],
  "Fresh Farm Market": [
    { name: "Seasonal Fruits", url: "/seasonal", icon: "ShoppingBag" },
    { name: "Root Vegetables", url: "/roots", icon: "Coffee" },
    { name: "Farm Fresh", url: "/farmfresh", icon: "Zap" },
    { name: "Local Produce", url: "/local", icon: "ShoppingBag" },
  ],
  "Wonderful Gifts Boutique": [
    { name: "Birthday", url: "/birthday", icon: "ShoppingBag" },
    { name: "Anniversary", url: "/anniversary", icon: "Coffee" },
    { name: "Wedding", url: "/wedding", icon: "Zap" },
    { name: "Holiday", url: "/holiday", icon: "ShoppingBag" },
  ],
  "Special Moments Store": [
    { name: "Personalized", url: "/personalized", icon: "ShoppingBag" },
    { name: "Custom Gifts", url: "/custom", icon: "Coffee" },
    { name: "Luxury Items", url: "/luxury", icon: "Zap" },
    { name: "Gift Sets", url: "/sets", icon: "ShoppingBag" },
  ],
  "Gift Gallery": [
    { name: "Decorative", url: "/decorative", icon: "ShoppingBag" },
    { name: "Collectibles", url: "/collectibles", icon: "Coffee" },
    { name: "Handmade", url: "/handmade", icon: "Zap" },
    { name: "Unique Finds", url: "/unique", icon: "ShoppingBag" },
  ]
};