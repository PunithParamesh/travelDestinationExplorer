import styles from './filter.module.css';

const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className={styles.filterContainer}>
      <button
        className={`${styles.btn} ${selectedCategory === 'All' ? styles.active : ''}`}
        onClick={() => onSelect('All')}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          className={`${styles.btn} ${selectedCategory === category ? styles.active : ''}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
