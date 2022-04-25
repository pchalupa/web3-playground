import { ICON } from '@constants';
import type { IconName } from '@types';
import { getClassNames } from '@utils';
import styles from './index.module.css';

interface Props {
	name: IconName;
	className?: string;
}

const Icon = ({ name, className }: Props) =>
	ICON[name]({
		title: name,
		className: getClassNames([styles.container, className]),
	});

export default Icon;
