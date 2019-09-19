import React from 'react';
import renderer from 'react-test-renderer';
import RecordList from './recordList.js';

const records = [
  {
    name: "Ironman",
    wearsSuit: "✅",
    portrayedBy: "Robert Downey Jr.",
    power: 100,
    id: 'iron-man',
  },
  {
    name: "Captain Marvel",
    wearsSuit: "✅",
    portrayedBy: "Carol Danvers",
    power: 9999,
    id: 'captain-marvel',
  },
  {
    name: "Hulk",
    wearsSuit: "❌",
    portrayedBy: "Mark Ruffalo",
    power: 8000,
    id: 'hulk',
  },
];

const columnNames = ['name', 'wearsSuit', 'portrayedBy', 'id'];

describe('RecordList', () => {
  it('renders properly, keyProperty defaults to id', () => {
    const tree = renderer
      .create(
        <RecordList records={records} columnNames={columnNames} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uses records name', () => {
    const tree = renderer
      .create(
        <RecordList records={records} columnNames={columnNames} recordsName="heroes" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('works with select', () => {
    const tree = renderer
      .create(
        <RecordList records={records} columnNames={columnNames} selectable />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
