import { products } from '../data/products';
import { ProductCard } from '../components/index';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';

const ShoppingPage = () => {
  const { cartState, onProductCountChange } = useShoppingCart();

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
            onChange={onProductCountChange}
            value={cartState[prod.id]?.count}
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
        {Object.entries(cartState).map(([key, product]) => (
          <ProductCard
            key={key}
            className="bg-dark"
            product={product}
            style={{ width: '150px' }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductCard.Image className="custom-img" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
