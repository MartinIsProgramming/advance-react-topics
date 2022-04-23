import { ReactElement } from 'react';
import { Product } from '../interfaces/interfaces';
import { Provider as ProductContextProvider } from '../contexts/productContext';
import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
}

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <ProductContextProvider value={{ product, counter, increaseBy }}>
      <div className={styles.productCard}>{children}</div>
    </ProductContextProvider>
  );
};
