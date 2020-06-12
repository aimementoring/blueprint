import React from 'react';
import renderer from 'react-test-renderer';
import Snackbar from './snackbar.js';

describe('Snackbar', () => {
	it('renders properly', () => {
		const tree = renderer
			.create(
				<Snackbar />,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
