import { Link } from 'react-router-dom';
import styles from './notfound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>← Back to Home</Link>
    </div>
  );
};

export default NotFound;
