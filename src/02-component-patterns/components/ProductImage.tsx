import { CSSProperties, useContext } from 'react';
import { productContext } from '../contexts/productContext';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

const ProductImage = ({ className, style }: Props) => {
  const { product } = useContext(productContext);
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={product.img ? product.img : noImage}
      alt={product.title}
      style={style}
    />
  );
};

export default ProductImage;
