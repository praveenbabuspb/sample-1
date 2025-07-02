import React from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingCart() {
  const { 
    items, 
    isOpen, 
    totalItems, 
    totalPrice, 
    toggleCart, 
    setCartOpen, 
    updateQuantity, 
    clearCart 
  } = useCartStore();

  return (
    <>
      {/* Floating Cart Button */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={toggleCart}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
        >
          <div className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-yellow-400 text-red-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </div>
          <div className="flex flex-col items-start">
            <span className="font-medium">
              {totalItems === 0 ? 'Cart Empty' : `${totalItems} Items`}
            </span>
            {totalPrice > 0 && (
              <span className="text-sm opacity-90">
                ${totalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </button>
      </motion.div>

      {/* Cart Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setCartOpen(false)}
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    Shopping Cart
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingCart className="h-16 w-16 text-neutral-300 dark:text-neutral-600 mb-4" />
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Add some delicious meat products to get started!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
                      >
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                              {item.name}
                            </h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {item.category}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="font-bold text-red-600 dark:text-red-400">
                                ${item.price} <span className="text-xs font-normal">{item.unit}</span>
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-sm font-medium">
                                Subtotal: ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 0)}
                                className="text-red-500 hover:text-red-700 p-1"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      Total: ${totalPrice.toFixed(2)}
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Clear Cart
                    </button>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors">
                      Proceed to Checkout
                    </button>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="w-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100 py-3 rounded-lg font-medium transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}