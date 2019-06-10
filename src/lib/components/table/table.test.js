import React from 'react';
import renderer from 'react-test-renderer';
import Table from './table.js';

describe('Table', () => {
	it('renders properly', () => {
		const tree = renderer
			.create(
				<Table />,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
