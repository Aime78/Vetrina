import React from 'react';
import renderer from 'react-test-renderer';
import methods from 'screens/PaymentScreen/cardData';
import SubscriptionCard from 'screens/SubscriptionScreen/components/SubscriptionCard/SubscriptionCard';
import plans from 'screens/SubscriptionScreen/subcriptionData';

it('renders the all subscription plans of the subscription screen appropriately', () => {
  const tree = renderer
    .create(
      <SubscriptionCard
        name={plans[0].name}
        price={plans[0].number}
        messi={plans[0].messi}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
