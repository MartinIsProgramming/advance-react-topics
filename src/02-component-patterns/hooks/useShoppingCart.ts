import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface ProductInCart extends Product {
  count: number;
}

export const useShoppingCart = () => {
  const [cartState, setCartState] = useState<{ [key: string]: ProductInCart }>(
    {}
  );

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setCartState(oldShoppingCart => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    });
  };

  return {
    cartState,
    onProductCountChange,
  };
};
