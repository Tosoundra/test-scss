import classNames from 'classnames';
import styles from './styles.module.scss';
import { memo } from 'react';

export const Card = memo(({ title, isActive, setSelectedCardIndex }) => {
	return (
		<div onClick={setSelectedCardIndex} className={classNames(styles.card, isActive ? styles.card_active : null)}>
			<span className={classNames(styles.title, isActive ? styles.title_white : null)}>Карточка {title}</span>
		</div>
	);
});
