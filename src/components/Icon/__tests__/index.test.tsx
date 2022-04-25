import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { ICON } from '@constants';
import type { IconName } from '@types';
import Icon from '..';

describe('Icon', () => {
	afterEach(cleanup);

	it.each(Object.keys(ICON))(
		'should render without issues %s icon',
		(name) => {
			render(<Icon name={name as IconName} />);

			expect(screen.getByTitle(name)).toBeTruthy();
			expect(screen.getByTitle(name)).toMatchSnapshot();
		}
	);
});
