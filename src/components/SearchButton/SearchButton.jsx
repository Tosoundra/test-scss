import styles from './styles.module.scss';
import SEARCH_ICON from '/src/assets/icons/search_icn.svg';

export const SearchButton = () => {
	return (
		<button className={styles.button} type='button'>
			<img src={SEARCH_ICON} alt='search icon' />
		</button>
	);
};
