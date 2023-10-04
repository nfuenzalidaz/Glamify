import React from 'react';
import Cardslist from '../CardList/CardList';
import styles from './Cards.module.css';
const Cards = () => {
	return (
		<div className={styles.Cardscontainer}>
			<h1 className={styles.Cardstitle}>Lista de Productos</h1>
			<Cardslist />
		</div>
	);
};

export default Cards;
