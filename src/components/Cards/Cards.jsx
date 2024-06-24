import styles from './styles.module.scss';
import { useState } from 'react';
import { Card } from '../Card/Card';
import classNames from 'classnames';

export const Cards = () => {
	const [selectedCardIndex, setSelectedCardIndex] = useState(null);

	const toggleDropdownActive = (id) => {
		selectedCardIndex === id ? setSelectedCardIndex(null) : setSelectedCardIndex(id);
	};

	return (
		<section className={styles.cards} id='anchor-3'>
			<div className={styles.wrapper}>
				<Card title={1} isActive={selectedCardIndex === 1} setSelectedCardIndex={() => toggleDropdownActive(1)} />
				<Card title={2} isActive={selectedCardIndex === 2} setSelectedCardIndex={() => toggleDropdownActive(2)} />
				<Card title={3} isActive={selectedCardIndex === 3} setSelectedCardIndex={() => toggleDropdownActive(3)} />
				<Card title={4} isActive={selectedCardIndex === 4} setSelectedCardIndex={() => toggleDropdownActive(4)} />
			</div>
			<div
				onClick={() => setSelectedCardIndex(null)}
				className={classNames(styles.dropdown, selectedCardIndex && styles.dropdown_active)}>
				<p className={styles.title}>Подробный блок карточки {selectedCardIndex}</p>
			</div>
		</section>
	);
};
