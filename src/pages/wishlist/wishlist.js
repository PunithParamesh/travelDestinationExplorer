import { useWishlist } from '../../context';
import DestinationCard from '../../components/destinationcard/destinationcard';
import styles from './wishlist.module.css';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className={styles.empty}>No destinations added yet.</p>
      ) : (
        <div className={styles.grid}>
          {wishlist.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
