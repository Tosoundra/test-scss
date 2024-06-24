import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { sliders } from '../../assets/constants/sliders';
import { Footer } from '../../blocks/Footer/Footer';
import { Header } from '../../blocks/Header.jsx/Header';

import styles from './styles.module.scss';
import { MainBanner } from '../../components/MainBanner/MainBanner';
import { Carousel } from '../../components/Carousel/Carousel';
import { Cards } from '../../components/Cards/Cards';

function App() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<MainBanner sliders={sliders} />
				<Carousel sliders={sliders} />

				<Cards />
			</main>
			<Footer />
		</>
	);
}

export default App;
