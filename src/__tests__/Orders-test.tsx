import React from 'react';
import OrdersHeader from 'screens/OrdersScreen/components/OrdersHeader/OrdersHeader';
import OrdersTable from 'screens/OrdersScreen/components/OrdersTable/OrdersTable';
import renderer from 'react-test-renderer';

it('renders the header of the orders screen appropriately', () => {
  const tree = renderer.create(<OrdersHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the table of the orders screen appropriately', () => {
  const tree = renderer.create(<OrdersTable />).toJSON();
  expect(tree).toMatchSnapshot();
});
