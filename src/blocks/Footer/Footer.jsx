import styles from './styles.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span className={styles['company-name']}>Ronix Systems</span>
			<div className={styles['link-container']}>
				<a className={styles.link} href='#'>
					Текст
				</a>
				<a className={styles.link} href='#'>
					Длинный текст
				</a>
				<a className={styles.link} href='#'>
					Просто текст
				</a>
			</div>
			<div className={styles['link-container']}>
				<a className={styles.link} href='#'>
					Бесплатный екст
				</a>
				<a className={styles.link} href='#'>
					Конструктор текста
				</a>
				<a className={styles.link} href='#'>
					Консультация текста
				</a>
			</div>
			<div className={styles['link-container']}>
				<a className={styles.link} href='#'>
					Политика конфиденциальности
				</a>
				<a className={styles.link} href='#'>
					Правила пользования сайтом
				</a>
				<a className={styles.link} href='#'>
					Реквизиты ИП
				</a>
			</div>
		</footer>
	);
};
