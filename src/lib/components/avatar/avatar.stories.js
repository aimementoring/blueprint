import React from 'react';
import Avatar from './avatar';

export default {
  title: 'Avatar',
};

export const initialsAvatar = () => <Avatar text="Kevin Bardi" />;

export const imageAvatar = () => (
  <Avatar
    text="Lionel Messi"
    photo={[
      {
        url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/08/19/15347041965884.jpg',
      },
    ]}
  />
);
