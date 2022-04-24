import { products } from '../data/products';
import { ProductCard } from '../components/index';
import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div>
        <ProductCard
          className="bg-dark"
          product={product}
          style={{ marginRight: '15px' }}
        >
          <ProductCard.Image className="custom-img" />
          <ProductCard.Title
            className="text-white"
            style={{ fontWeight: 'bold' }}
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
