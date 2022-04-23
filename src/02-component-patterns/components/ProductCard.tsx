import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';
import { Product } from '../interfaces/interfaces';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={product.img ? product.img : noImage}
        alt={product.title}
      />

      <span className={styles.productDescription}>{product.title}</span>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
