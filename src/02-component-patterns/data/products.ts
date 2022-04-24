import { Product } from '../interfaces/interfaces';

export const product = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffee Mug',
};

export const product2 = {
  id: '2',
  title: 'Another product',
  img: './coffee-mug2.png',
};

export const products: Product[] = [product, product2];
