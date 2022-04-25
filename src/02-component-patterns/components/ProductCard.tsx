import { CSSProperties } from 'react';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
} from '../interfaces/interfaces';
import { Provider as ProductContextProvider } from '../contexts/productContext';
import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, isMaxReached, reset, maxCount } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <ProductContextProvider
      value={{ product, counter, increaseBy, isMaxReached }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          product,
          count: counter,
          maxCount,
          increaseBy,
          isMaxReached,
          reset,
        })}
      </div>
    </ProductContextProvider>
  );
};
