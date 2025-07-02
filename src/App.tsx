import { useState, useEffect } from "react"
import { NavBar } from "./components/NavBar"
import { ShopPage } from "./components/ShopPage"
import { motion } from "framer-motion"
import { DataService } from "./services/dataService"
import { getIcon } from "./utils/iconMapper"
import type { NavItem } from "./data/categories"
import type { Shop } from "./data/shops"
//okey

function App() {
  const [categories, setCategories] = useState<NavItem[]>([])
  const [currentCategory, setCurrentCategory] = useState("Supermarket")
  const [currentShops, setCurrentShops] = useState<Shop[]>([])
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null)
  const [loading, setLoading] = useState(true)

  // Load categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await DataService.getCategories()
        setCategories(categoriesData)
        if (categoriesData.length > 0) {
          setCurrentCategory(categoriesData[0].name)
        }
      } catch (error) {
        console.error("Error loading categories:", error)
      }
    }
    
    loadCategories()
  }, [])

  // Load shops when category changes
  useEffect(() => {
    const loadShops = async () => {
      if (!currentCategory) return
      
      setLoading(true)
      try {
        const shopsData = await DataService.getShopsByCategory(currentCategory)
        setCurrentShops(shopsData)
      } catch (error) {
        console.error("Error loading shops:", error)
      } finally {
        setLoading(false)
      }
    }

    loadShops()
  }, [currentCategory])

  const handleNavClick = (item: NavItem) => {
    console.log("Nav clicked:", item.name)
    setCurrentCategory(item.name)
    setSelectedShop(null) // Reset shop selection when changing category
  }

  const handleShopClick = (shop: Shop) => {
    console.log("Shop clicked:", shop)
    setSelectedShop(shop)
  }

  const handleBackToShops = () => {
    console.log("Back to shops clicked")
    setSelectedShop(null)
  }

  console.log("Current state - Category:", currentCategory, "Selected Shop:", selectedShop)

  // Convert string icon names to actual icon components for NavBar
  const navItems = categories.map(category => ({
    ...category,
    icon: getIcon(category.icon)
  }))

  if (selectedShop) {
    return <ShopPage shop={selectedShop} onBack={handleBackToShops} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <NavBar items={navItems} onItemClick={handleNavClick} />
      
      <main className="container mx-auto px-4 pt-8 pb-24 md:pt-32 md:pb-20">
        <div className="space-y-8">
          <motion.div
            key={currentCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
              {currentCategory} Shops
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover the best {currentCategory.toLowerCase()} shops in your area
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="relative">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-200 dark:border-blue-800 opacity-20"></div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
            >
              {currentShops.map((shop, index) => (
                <motion.div
                  key={shop.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                    {shop.image}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200 text-center">
                    {shop.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-center text-sm">
                    {shop.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {shop.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      🕒 {shop.deliveryTime}
                    </div>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleShopClick(shop);
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative z-10"
                  >
                    Visit Shop
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Why Choose Our Platform?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Browse through different shop categories and discover local businesses. 
              Each shop offers unique products with detailed information, ratings, and fast delivery options.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">🛒 Multiple Categories</span>
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">⭐ Rated Shops</span>
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">🚚 Fast Delivery</span>
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">💳 Secure Payment</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default App