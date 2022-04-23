import { CSSProperties, useContext } from 'react';
import { productContext } from '../contexts/productContext';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy } = useContext(productContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
export default ProductButtons;
