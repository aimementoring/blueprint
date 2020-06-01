import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import TermsAndConditions from './termsAndConditions';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'TermsAndConditions',
  parameters: {
    jest: ['termsAndConditions.test.js'],
  },
};

export const WithChildrenTerms = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <TermsAndConditions
      checkboxLabel="Testing my checkbox"
      onChange={(_name, value) => setCheckbox(value)}
      name="value"
      value={checkbox}
      height={150}
      theme={select('theme', themeOptions, 'plain')}
    >
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        {`consectetur adipiscing elit. Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.\n
        Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.\n
        Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante. Ut pretium egestas pellentesque. Integer placerat ullamcorper massa, nec maximus arcu efficitur vitae. Quisque odio est, vehicula quis justo at, tempus vulputate lectus. Vivamus sagittis metus et aliquam interdum. Nam in pharetra risus. Proin lectus ligula, pellentesque non nulla nec, fringilla porttitor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n
        Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.`}
      </p>
    </TermsAndConditions>
  );
};

export const DriveFileTerms = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <TermsAndConditions
      drive="2PACX-1vRvWKxJfAav1AuArdiyMcSR7znvOOo-ytMLASr3L5zw8bUdvYgBtSwzV7ME5FtWGlTQNVVsIvv4ukMh"
      onChange={(_name, value) => setCheckbox(value)}
      name="value"
      value={checkbox}
      theme={select('theme', themeOptions, 'plain')}
    />
  );
};

export const PdfFileTerms = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <TermsAndConditions
      pdf="https://archive.org/download/starrover00lond/starrover00lond.pdf"
      onChange={(_name, value) => setCheckbox(value)}
      name="value"
      value={checkbox}
      theme={select('theme', themeOptions, 'plain')}
    />
  );
};

export const PdfFileTermsWithLabelAndHeight = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <TermsAndConditions
      pdf="https://archive.org/download/starrover00lond/starrover00lond.pdf"
      checkboxLabel="Testing my checkbox"
      onChange={(_name, value) => setCheckbox(value)}
      name="value"
      value={checkbox}
      height={300}
      theme={select('theme', themeOptions, 'plain')}
    />
  );
};

export const ParagraphTerms = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <TermsAndConditions
      checkboxLabel="Testing with paragraph"
      height={150}
      paragraph={`
        consectetur adipiscing elit. Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.\n
        Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.\n
        Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante. Ut pretium egestas pellentesque. Integer placerat ullamcorper massa, nec maximus arcu efficitur vitae. Quisque odio est, vehicula quis justo at, tempus vulputate lectus. Vivamus sagittis metus et aliquam interdum. Nam in pharetra risus. Proin lectus ligula, pellentesque non nulla nec, fringilla porttitor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n
        Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.
      `}
      onChange={(_name, value) => setCheckbox(value)}
      name="value"
      value={checkbox}
      theme={select('theme', themeOptions, 'plain')}
    />
  );
};
