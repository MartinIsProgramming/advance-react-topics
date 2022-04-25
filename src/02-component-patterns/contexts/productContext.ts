import { createContext } from 'react';
import { Product } from '../interfaces/interfaces';

interface ProductContextProps {
  product: Product;
  counter: number;
  isMaxReached?: () => boolean;
  increaseBy: (value: number) => void;
}
export const productContext = createContext({} as ProductContextProps);
export const { Provider } = productContext;
