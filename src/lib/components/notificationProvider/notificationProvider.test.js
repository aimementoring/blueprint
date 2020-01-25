import React from 'react';
import renderer from 'react-test-renderer';
import NotificationProvider from './notificationProvider.js';

describe('NotificationProvider', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <NotificationProvider>
          <div>My App</div>
        </NotificationProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
