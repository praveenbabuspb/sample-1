import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Menu, Star, Plus, Minus } from "lucide-react"
import { useCartStore } from '../store/cartStore'
import { FloatingCart } from './FloatingCart'
import { DataService } from '../services/dataService'
import { getIcon } from '../utils/iconMapper'
import type { Shop } from '../data/shops'
import type { ShopCategory } from '../data/shopCategories'
import type { Product } from '../data/products'

interface ShopPageProps {
  shop: Shop
  onBack: () => void
}

export function ShopPage({ shop, onBack }: ShopPageProps) {
  const [currentSection, setCurrentSection] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [shopNavItems, setShopNavItems] = useState<ShopCategory[]>([])
  const [currentProducts, setCurrentProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { items, addItem, removeItem, totalItems } = useCartStore()

  // Load shop categories on component mount
  useEffect(() => {
    const loadShopCategories = async () => {
      try {
        const categoriesData = await DataService.getShopCategories(shop.name)
        setShopNavItems(categoriesData)
        if (categoriesData.length > 0) {
          setCurrentSection(categoriesData[0].name)
        }
      } catch (error) {
        console.error("Error loading shop categories:", error)
      }
    }
    
    loadShopCategories()
  }, [shop.name])

  // Load products when section changes
  useEffect(() => {
    const loadProducts = async () => {
      if (!currentSection || !shop.name) return
      
      setLoading(true)
      try {
        const productsData = await DataService.getProductsByShopAndCategory(shop.name, currentSection)
        setCurrentProducts(productsData)
      } catch (error) {
        console.error("Error loading products:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [shop.name, currentSection])

  const handleNavClick = (item: ShopCategory) => {
    setCurrentSection(item.name)
  }

  // Get quantity for a specific product
  const getProductQuantity = (productId: string) => {
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 overflow-hidden">
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-80' : 'w-16'
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Toggle Button */}
          <div className="flex items-center justify-center mb-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Menu className={`h-4 w-4 text-slate-600 dark:text-slate-400 transition-transform duration-300 ${
                sidebarOpen ? 'rotate-90' : 'rotate-0'
              }`} />
            </button>
          </div>

          {/* Shop Logo */}
          {sidebarOpen && (
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="text-2xl">{shop.image}</div>
              <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                {shop.name}
              </span>
            </div>
          )}

          {!sidebarOpen && (
            <div className="flex items-center justify-center mb-6">
              <div className="text-2xl">{shop.image}</div>
            </div>
          )}
          
          {/* Navigation Categories */}
          <div className="flex flex-col gap-2 flex-1">
            {shopNavItems.map((item, idx) => {
              const Icon = getIcon(item.icon);
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                    !sidebarOpen ? 'justify-center' : ''
                  } ${
                    currentSection === item.name 
                      ? 'bg-blue-100 dark:bg-blue-900/20 border-l-4 border-blue-500' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title={!sidebarOpen ? item.name : undefined}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && (
                    <span className={`text-sm font-medium ${
                      currentSection === item.name 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-slate-500 dark:text-slate-300'
                    }`}>
                      {item.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Cart Summary */}
          <div className="mt-auto">
            <div
              className={`flex items-center gap-3 px-3 py-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 ${
                !sidebarOpen ? 'justify-center' : ''
              }`}
            >
              <div className="relative flex-shrink-0">
                <div className="h-5 w-5 text-green-600 dark:text-green-400 text-xl">🛒</div>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              {sidebarOpen && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    Cart Items
                  </span>
                  <span className="text-xs text-green-600 dark:text-green-400">
                    {totalItems} items
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="w-full h-full overflow-y-auto">
        <main className="container mx-auto px-4 pt-8 pb-32">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onBack}
            className="flex items-center space-x-2 mb-8 px-4 py-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Shops</span>
          </motion.button>

          <div className="space-y-8">
            {/* Shop Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <div className="text-8xl mb-4">{shop.image}</div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                {shop.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {shop.description}
              </p>
              <div className="flex justify-center items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{shop.rating}</span>
                </div>
                <div className="text-gray-500">🕒 {shop.deliveryTime}</div>
              </div>
            </motion.div>

            {/* Current Section Title */}
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                {currentSection} Section
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Browse our {currentSection.toLowerCase()} collection
              </p>
            </motion.div>

            {/* Products Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {currentProducts.map((product, index) => {
                  const quantity = getProductQuantity(product.id);
                  
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                      className="group p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105"
                    >
                      {/* Product Image */}
                      <div className="relative h-32 mb-3 overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">Out of Stock</span>
                          </div>
                        )}
                        <div className="absolute top-2 right-2 bg-white dark:bg-slate-800 rounded-full px-2 py-1 flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs font-medium">{product.rating}</span>
                        </div>
                      </div>

                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1 text-center">
                        {product.category}
                      </div>
                      <h3 className="text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200 text-center">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 text-center">
                        {product.description}
                      </p>
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 text-center">
                        ${product.price} <span className="text-xs font-normal">{product.unit}</span>
                      </p>

                      {/* Add to Cart Controls */}
                      <div className="flex items-center justify-center">
                        {quantity > 0 ? (
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => removeItem(product.id)}
                              className="p-1 rounded-full bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors"
                            >
                              <Minus className="h-4 w-4 text-red-600 dark:text-red-400" />
                            </button>
                            <span className="font-semibold text-slate-900 dark:text-slate-100 min-w-[20px] text-center">
                              {quantity}
                            </span>
                            <button
                              onClick={() => addItem(product)}
                              className="p-1 rounded-full bg-green-100 dark:bg-green-900/20 hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors"
                              disabled={!product.inStock}
                            >
                              <Plus className="h-4 w-4 text-green-600 dark:text-green-400" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addItem(product)}
                            disabled={!product.inStock}
                            className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
                              product.inStock
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* Shop Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">Shop Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span>🚚</span>
                  <span className="text-gray-600 dark:text-gray-400">Free delivery on orders over $25</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💳</span>
                  <span className="text-gray-600 dark:text-gray-400">Multiple payment options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🔄</span>
                  <span className="text-gray-600 dark:text-gray-400">Easy returns within 7 days</span>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Floating Cart */}
      <FloatingCart />
    </div>
  )
}