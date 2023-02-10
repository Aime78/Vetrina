import React from 'react';
import {HeaderProducts, TableProducts} from 'screens/ProductsScreen/components';
import renderer from 'react-test-renderer';

it('renders the header of the products screen appropriately', () => {
  const tree = renderer.create(<HeaderProducts />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the table of the products screen appropriately', () => {
  const tree = renderer.create(<TableProducts />).toJSON();
  expect(tree).toMatchSnapshot();
});
