import { Outlet } from 'react-router-dom';
import styles from './index.module.css';

const Primary = () => (
	<main className={styles.container}>
		<Outlet />
	</main>
);

export default Primary;
