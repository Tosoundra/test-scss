import Slider from 'react-slick';
import { Slide } from '../Slide/Slide';
import styles from './styles.module.scss';
import { useRef } from 'react';
import MAIN_BANNER_ICON from '/src/assets/icons/main-banner_icon.svg';
import classNames from 'classnames';

export const MainBanner = ({ sliders }) => {
	const sliderRef = useRef(null);

	const previousSlideHandler = () => {
		sliderRef.current.slickPrev();
	};
	const nextSlideHandler = () => {
		sliderRef.current.slickNext();
	};

	return (
		<div className={styles['slider-container']} id='anchor-1'>
			<Slider
				appendDots={(dots) => (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							bottom: '32px',
						}}>
						{' '}
						<button
							className={classNames(styles['navigation-button_small'], styles.previous_small)}
							onClick={previousSlideHandler}>
							<img src={MAIN_BANNER_ICON} alt='button icon' />
						</button>
						<ul style={{ margin: '0px', display: 'flex', alignItems: 'center' }}>{dots}</ul>{' '}
						<button className={classNames(styles['navigation-button_small'], styles.next_small)} onClick={nextSlideHandler}>
							<img src={MAIN_BANNER_ICON} alt='button icon' />
						</button>
					</div>
				)}
				dots
				arrows={false}
				className={styles['main-carousel']}
				ref={sliderRef}>
				{sliders.map((value) => (
					<Slide key={value}>
						<span className={styles.title}>Слайд №{value}</span>
						<button className={styles.button} type='button'>
							Button
						</button>
					</Slide>
				))}
			</Slider>
			<button className={classNames(styles['navigation-button'], styles.previous)} onClick={previousSlideHandler}>
				<img src={MAIN_BANNER_ICON} alt='button icon' />
			</button>
			<button className={classNames(styles['navigation-button'], styles.next)} onClick={nextSlideHandler}>
				<img src={MAIN_BANNER_ICON} alt='button icon' />
			</button>
			<div></div>
		</div>
	);
};
