import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

let mockProducts, wrapper, productSelectFn;

beforeEach(() => {
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];

  // productSelectFn = (productSelected) => console.log('==== You selected', productSelected);

  productSelectFn = jest.fn();
  wrapper = shallow(
    <ProductList
      products={mockProducts}
      onProductSelect={productSelectFn}
    />
  );

  wrapper = shallow(
    <ProductList
      products={mockProducts}
      onProductSelect={productSelectFn}
    />
  );
});

it('should render a list of products as an unordered list', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
});

it('should display the product name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});

it('should display the brand name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true)
});

it('Should call `props.onProductSelect` when <li> is clicked', () => {
  const firstElement = wrapper.find('li').first();

  expect(productSelectFn.mock.calls.length).toEqual(0);

  firstElement.simulate('click');

  expect(productSelectFn.mock.calls.length).toEqual(1);

  expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
});

afterEach(() => {
  productSelectFn.mockReset();
});
