import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './avatar.js';

describe('Avatar name', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Avatar text="Kevin Bardi" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Avatar with photo', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Avatar
          text="Lionel Messi"
          photo={[
            {
              url:
                'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/08/19/15347041965884.jpg',
            },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
