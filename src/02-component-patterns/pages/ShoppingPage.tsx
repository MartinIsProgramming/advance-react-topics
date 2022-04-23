import ProductCard from '../components/ProductCard';
import { Product } from '../interfaces/interfaces';

const products: Product[] = [
  {
    id: '1',
    img: './coffee-mug.png',
    title: 'Coffee Mug',
  },

  {
    id: '2',
    title: 'Another product',
  },
];

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
