import { useCallback, useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({ onChange, product, value = 0, initialValues }: Props) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isComponentMounted = useRef(false);
  const maxCount = initialValues?.maxCount;

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (maxCount) {
      newValue = Math.min(newValue, maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isComponentMounted.current) return;

    setCounter(value);
  }, [value]);

  return {
    counter,
    maxCount,
    increaseBy,
    isMaxReached,
    reset,
  };
};

export default useProduct;
