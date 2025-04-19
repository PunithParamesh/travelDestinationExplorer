import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../../data';
import { useWishlist } from '../../context';
import styles from './destinationdetails.module.css';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(dest => dest.id === Number(id));

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  if (!destination) {
    return <div className={styles.notFound}>Destination not found.</div>;
  }

  const isWishlisted = wishlist.some(item => item.id === destination.id);

  const toggleWishlist = () => {
    isWishlisted
      ? removeFromWishlist(destination.id)
      : addToWishlist(destination);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backBtn}>← Back</button>
      <div className={styles.detailsCard}>
        <img src={destination.image} alt={destination.name} className={styles.image} />
        <div className={styles.info}>
          <h2>{destination.name}</h2>
          <p className={styles.category}>Category: {destination.category}</p>
          <p className={styles.description}>{destination.description}</p>
          <button onClick={toggleWishlist} className={styles.wishlistBtn}>
            {isWishlisted ? ' Remove from Wishlist' : '❤️ Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
