import React from 'react';
import renderer from 'react-test-renderer';
import StandardTable from './standardTable.js';

describe('StandardTable', () => {
	it('renders properly', () => {
		const tree = renderer
			.create(
				<StandardTable />,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
