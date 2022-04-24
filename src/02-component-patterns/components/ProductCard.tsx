import { CSSProperties, ReactElement } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';
import { Provider as ProductContextProvider } from '../contexts/productContext';
import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <ProductContextProvider value={{ product, counter, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </ProductContextProvider>
  );
};
