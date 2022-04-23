import { useContext } from 'react';
import { productContext } from '../contexts/productContext';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

const ProductImage = () => {
  const { product } = useContext(productContext);
  return (
    <img
      className={styles.productImg}
      src={product.img ? product.img : noImage}
      alt={product.title}
    />
  );
};

export default ProductImage;
