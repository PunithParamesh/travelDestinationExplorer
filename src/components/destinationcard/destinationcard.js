import { Link } from 'react-router-dom';
import styles from './destinationcard.module.css'
import { useWishlist } from '../../context';

const DestinationCard = ({ destination }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = wishlist.some(item => item.id === destination.id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(destination.id);
    } else {
      addToWishlist(destination);
    }
  };

  return (
    <div className={styles.card}>
      <img src={destination.image} alt={destination.name} className={styles.image} /> 
      <div className={styles.content}>
        <h3>{destination.name}</h3>
        <p>{destination.category}</p>
      </div>
      <div className={styles.actions}>
        <Link to={`/destinations/${destination.id}`} className={styles.detailsLink}>View Details</Link>
        <button onClick={handleWishlistClick} className={styles.wishlistBtn}>
          {isWishlisted ? ' Remove' : '❤️ Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
