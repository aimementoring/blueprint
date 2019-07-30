import React from 'react';
import renderer from 'react-test-renderer';
import PdfViewer from './pdfViewer.js';

describe('PdfViewer', () => {
  it('renders properly with all props used', () => {
    const tree = renderer
      .create(
        <PdfViewer
          pdf="https://archive.org/download/starrover00lond/starrover00lond.pdf"
          checkboxLabel="Testing my checkbox"
          onChange={value => console.log(value)}
          height={300}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly only with pdf value, without checkbox', () => {
    const tree = renderer
      .create(<PdfViewer pdf="https://archive.org/download/starrover00lond/starrover00lond.pdf" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with pdf, and checkbox', () => {
    const tree = renderer
      .create(
        <PdfViewer
          pdf="https://archive.org/download/starrover00lond/starrover00lond.pdf"
          checkboxLabel="Testing my checkbox"
          onChange={value => console.log(value)}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
