import { ProductCard as ProductCardHOC } from './ProductCard';
import { Props as ProductCardProps } from './ProductCard';

import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductButtons from './ProductButtons';

interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Image: () => JSX.Element;
  Title: () => JSX.Element;
  Buttons: () => JSX.Element;
}

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});
