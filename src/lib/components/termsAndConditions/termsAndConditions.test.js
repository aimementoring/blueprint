import React from 'react';
import renderer from 'react-test-renderer';
import TermsAndConditions from './termsAndConditions.js';

describe('TermsAndConditions', () => {
  it('renders properly with all props used', () => {
    const tree = renderer
      .create(
        <TermsAndConditions>
          <strong>Lorem ipsum dolor sit amet</strong>
          <p>
            {`consectetur adipiscing elit. Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.\n
            Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.\n
            Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante. Ut pretium egestas pellentesque. Integer placerat ullamcorper massa, nec maximus arcu efficitur vitae. Quisque odio est, vehicula quis justo at, tempus vulputate lectus. Vivamus sagittis metus et aliquam interdum. Nam in pharetra risus. Proin lectus ligula, pellentesque non nulla nec, fringilla porttitor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n
            Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.`}
          </p>
        </TermsAndConditions>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with all props used', () => {
    const tree = renderer
      .create(
        <TermsAndConditions checkboxLabel="Testing my checkbox" height={150}>
          <strong>Lorem ipsum dolor sit amet</strong>
          <p>
            {`consectetur adipiscing elit. Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.\n
            Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.\n
            Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante. Ut pretium egestas pellentesque. Integer placerat ullamcorper massa, nec maximus arcu efficitur vitae. Quisque odio est, vehicula quis justo at, tempus vulputate lectus. Vivamus sagittis metus et aliquam interdum. Nam in pharetra risus. Proin lectus ligula, pellentesque non nulla nec, fringilla porttitor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n
            Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.`}
          </p>
        </TermsAndConditions>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with all props used', () => {
    const tree = renderer
      .create(
        <TermsAndConditions
          pdf="https://archive.org/download/starrover00lond/starrover00lond.pdf"
          checkboxLabel="Testing my checkbox"
          height={300}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly only with pdf value, without checkbox', () => {
    const tree = renderer
      .create(
        <TermsAndConditions pdf="https://archive.org/download/starrover00lond/starrover00lond.pdf" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with pdf, and checkbox', () => {
    const tree = renderer
      .create(
        <TermsAndConditions
          pdf="https://archive.org/download/starrover00lond/starrover00lond.pdf"
          checkboxLabel="Testing my checkbox"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with paragraph props', () => {
    const tree = renderer
      .create(
        <TermsAndConditions
          paragraph={`
            consectetur adipiscing elit. Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.\n
            Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.\n
            Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante. Ut pretium egestas pellentesque. Integer placerat ullamcorper massa, nec maximus arcu efficitur vitae. Quisque odio est, vehicula quis justo at, tempus vulputate lectus. Vivamus sagittis metus et aliquam interdum. Nam in pharetra risus. Proin lectus ligula, pellentesque non nulla nec, fringilla porttitor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n
            Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.
          `}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
