import React from 'react';
import renderer from 'react-test-renderer';
import PaymentCard from 'screens/PaymentScreen/components/PaymentCard/PaymentCard';
import methods from 'screens/PaymentScreen/cardData';

it('renders the all products button of the new product screen appropriately', () => {
  const tree = renderer
    .create(
      <PaymentCard
        icon={methods[0].method}
        name={methods[0].methodName}
        status={methods[0].status}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
