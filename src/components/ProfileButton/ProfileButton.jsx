import styles from './styles.module.scss';
import PROFILE_ICON from '/src/assets/icons/profile_icon.svg';

export const ProfileButton = () => {
	return (
		<button className={styles.button} type='button'>
			<img src={PROFILE_ICON} alt='profile icon' />
		</button>
	);
};
