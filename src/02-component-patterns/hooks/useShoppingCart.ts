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
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    cartState,
    onProductCountChange,
  };
};
