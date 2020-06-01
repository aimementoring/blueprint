import React from 'react';
import Footer from './footer';

export default {
  title: 'Footer',
  parameters: {
    jest: ['footer.test.js'],
  },
};

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

export const defaultFooter = () => (
  <Footer location={{ pathname: '/' }} menuItems={menuItems} copyright={copyright} />
);
