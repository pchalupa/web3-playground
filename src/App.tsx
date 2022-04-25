import { Route, Routes } from 'react-router-dom';
import PrimaryLayout from '@layouts/Primary';
import Index from '@routes';

const App = () => (
	<Routes>
		<Route path="/">
			<Route element={<PrimaryLayout />}>
				<Route index element={<Index />} />
			</Route>
		</Route>
	</Routes>
);

export default App;
