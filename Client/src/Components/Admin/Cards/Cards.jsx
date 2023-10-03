import { useState } from 'react';
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../Redux/Features/cartSlice';

const Cards = ({ id, name, description, image, price, category, stock }) => {
	const dispatch = useDispatch();
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const addToCart = () => {
		dispatch(addItemToCart({ id, name, price, stock, image, description }));
	};

	return (
		<div className={styles.cardContainer}>
			<div className={styles.priceIconsContainer}>
				<h4 className={styles.price}>${price}</h4>
				<div className={styles.iconsContainer}>
					<button
						className={styles.cardButtons}
						onClick={addToCart}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					></button>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Link to={`/admin/productos/${id}`} className={styles.cardLink}>
					<img src={image} alt='image' className={styles.image} />
				</Link>
			</div>
			<div className={styles.nameContainer}>
				<h6 className={styles.name} title={name}>
					{name.toUpperCase()}
				</h6>
			</div>
		</div>
	);
};

export default Cards;
