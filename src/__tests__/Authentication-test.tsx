import {Text} from 'react-native';
import React from 'react';
import AuthLayout from 'layout/AuthLayout/AuthLayout';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders the title and description', () => {
  const tree = renderer
    .create(
      <AuthLayout
        title="Title"
        description="Description"
        children={<Text>Children</Text>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the children', () => {
  const tree = renderer
    .create(
      <AuthLayout
        title="Title"
        description="Description"
        children={<Text>Children</Text>}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
