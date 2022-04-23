import { useContext } from 'react';
import { productContext } from '../contexts/productContext';
import styles from '../styles/styles.module.css';

const ProductTitle = () => {
  const { product } = useContext(productContext);

  return <span className={styles.productDescription}>{product.title}</span>;
};

export default ProductTitle;
