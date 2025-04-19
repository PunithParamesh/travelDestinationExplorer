import { useState } from 'react';
import { destinations } from '../../data';
import DestinationCard from '../../components/destinationcard/destinationcard';
import CategoryFilter from '../../components/filter/filter';
import styles from './home.module.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [...new Set(destinations.map(dest => dest.category))];

  const filteredDestinations = selectedCategory === 'All'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Explore Destinations</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className={styles.grid}>
        {filteredDestinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Home;
