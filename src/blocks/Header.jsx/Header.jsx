import { ProfileButton } from '../../components/ProfileButton/ProfileButton';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<span className={styles['company-name']}>Ronix Systems</span>
			<div className={styles.navigation}>
				<a className={styles.anchor} href='#anchor-1'>
					<span className={styles['anchor-text']}>Якорь на раздел 1</span>
				</a>
				<a className={styles.anchor} href='#anchor-2'>
					<span className={styles['anchor-text']}>Якорь на раздел 1</span>
				</a>
				<a className={styles.anchor} href='#anchor-3'>
					<span className={styles['anchor-text']}>Якорь на раздел 1</span>
				</a>
			</div>
			<div className={styles.profile}>
				<SearchButton />
				<ProfileButton />
			</div>
		</header>
	);
};
