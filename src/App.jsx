import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './styles.module.scss';
import { Comp } from './components/Comp';

function App() {
	return (
		<>
			<div className={styles.div}></div>
			<Comp />
		</>
	);
}

export default App;
