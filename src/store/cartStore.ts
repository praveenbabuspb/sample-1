import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      totalItems: 0,
      totalPrice: 0,

      addItem: (product) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }]
          });
        }

        // Update totals
        const newItems = get().items;
        set({
          totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
      },

      removeItem: (productId) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === productId);

        if (existingItem && existingItem.quantity > 1) {
          set({
            items: items.map(item =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          });
        } else {
          set({
            items: items.filter(item => item.id !== productId)
          });
        }

        // Update totals
        const newItems = get().items;
        set({
          totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          set({
            items: get().items.filter(item => item.id !== productId)
          });
        } else {
          set({
            items: get().items.map(item =>
              item.id === productId
                ? { ...item, quantity }
                : item
            )
          });
        }

        // Update totals
        const newItems = get().items;
        set({
          totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0
        });
      },

      toggleCart: () => {
        set({ isOpen: !get().isOpen });
      },

      setCartOpen: (open) => {
        set({ isOpen: open });
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ items: state.items, totalItems: state.totalItems, totalPrice: state.totalPrice })
    }
  )
);