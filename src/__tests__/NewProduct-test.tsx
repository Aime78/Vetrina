import React from 'react';
import {
  AllProductsButton,
  GeneralInfo,
  Price,
  ProductType,
} from 'screens/NewProductScreen/components';
import renderer from 'react-test-renderer';

it('renders the all products button of the new product screen appropriately', () => {
  const tree = renderer.create(<AllProductsButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the general information of the product screen appropriately', () => {
  const tree = renderer.create(<GeneralInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the price information of the product screen appropriately', () => {
  const tree = renderer.create(<Price />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the product type of the product screen appropriately', () => {
  const tree = renderer.create(<ProductType />).toJSON();
  expect(tree).toMatchSnapshot();
});
