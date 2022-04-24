import { product, product2, products } from '../data/products';
import { ProductCard } from '../components/index';
import '../styles/custom-styles.css';

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map(prod => (
          <ProductCard
            className="bg-dark"
            key={prod.id}
            product={prod}
            style={{ marginRight: '15px' }}
          >
            <ProductCard.Image className="custom-img" />
            <ProductCard.Title
              className="text-white"
              style={{ fontWeight: 'bold' }}
            />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          className="bg-dark"
          product={product}
          style={{ width: '150px' }}
        >
          <ProductCard.Image className="custom-img" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          className="bg-dark"
          product={product2}
          style={{ width: '150px' }}
        >
          <ProductCard.Image className="custom-img" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
