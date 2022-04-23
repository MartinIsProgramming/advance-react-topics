import { CSSProperties, useContext } from 'react';
import { productContext } from '../contexts/productContext';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

const ProductTitle = ({ className, style }: Props) => {
  const { product } = useContext(productContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {product.title}
    </span>
  );
};

export default ProductTitle;
