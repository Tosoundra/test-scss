import styles from './styles.module.scss';

export const Slide = ({ children }) => {
	return <div className={styles.slide}>{children}</div>;
};
