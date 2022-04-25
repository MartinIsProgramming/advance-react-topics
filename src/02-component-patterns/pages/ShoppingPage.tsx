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
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, increaseBy, count, isMaxReached }) => (
            <>
              <ProductCard.Image className="custom-img" />
              <ProductCard.Title
                className="text-white"
                style={{ fontWeight: 'bold' }}
              />
              <ProductCard.Buttons className="custom-buttons" />
              <button onClick={reset}> reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxReached() && (
                <button onClick={() => increaseBy(+2)}>+2</button>
              )}

              <div className="text-white">{count}</div>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
