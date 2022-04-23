import { products } from '../data/products';
import { ProductCard } from '../components/index';
import '../styles/custom-styles.css';

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            style={{ backgroundColor: '#70D1F8' }}
          >
            <ProductCard.Image
              className="custom-img"
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }}
            />
            <ProductCard.Title
              className="text-white"
              style={{ fontWeight: 'bold' }}
            />
            <ProductCard.Buttons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
