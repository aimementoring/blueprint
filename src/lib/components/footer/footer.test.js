import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer.js';

describe('Footer', () => {
  const menuItems = [
    {
      title: 'Pitch In',
      menu: [
        {
          link: '/be-a-mentor',
          title: `Become a <strong>Mentor</strong>`,
        },
        {
          link: '/contact',
          title: `Become a <strong>Partner</strong>`,
        },
        {
          link: '/donate',
          title: 'Make a Donation',
        },
      ],
    },
    {
      title: 'What Else?',
      menu: [
        {
          link: '/apparel-products',
          title: `Shop Apparel`,
        },
        {
          link: '/the-mentor',
          title: 'Read the book',
        },
        {
          link: '/about',
          title: 'About AIME',
        },
        {
          link: '/jack-manning-bancroft',
          title: 'Founder &amp; CEO',
        },
      ],
    },
    {
      title: 'Go Further',
      menu: [
        {
          link: '/positions',
          title: 'Work with AIME',
        },
        {
          link: '/faq',
          title: 'FAQs',
        },
        {
          link: '/contact',
          title: 'Contact &amp; CEO',
        },
      ],
    },
  ];

  const copyright = {
    items: [
      {
        link: '/terms-of-service',
        title: 'Terms of Service',
      },
      {
        title: 'ABN 31 081 797 652',
      },
      {
        title: 'ICN 7040',
      },
    ],
  };

  it('renders properly', () => {
    const tree = renderer
      .create(<Footer location={{ pathname: '/' }} menuItems={menuItems} copyright={copyright} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
