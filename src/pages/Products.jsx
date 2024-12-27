import React from 'react';
import Bounded from '../components/Bounded';
import Heading from '../components/Heading';
import ProductsList from '../components/ProductsList';
import { products } from '../constants';
const Products = () => {
  return (
    <Bounded as='article'>
      <Heading size='xl' className='mb-8'>
        Our Products
      </Heading>
      <div className='prose prose-xl prose-invert mb-10'>
        <p>
          Ready to take the plunge? Dive into a world of possibilities and
          explore our awesome products today!
        </p>
      </div>
      <ProductsList products={products} />
    </Bounded>
  );
};

export default Products;
