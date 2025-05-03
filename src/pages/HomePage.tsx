import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ExperienceSection from '../components/home/ExperienceSection';
import CollectionsSection from '../components/home/CollectionsSection';
import RestaurantsSection from '../components/home/RestaurantsSection';

const HomePage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'Order Food Online from India\'s Best Food Delivery Service | Zomato';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-0">
        <Hero />
        <ExperienceSection />
        <CollectionsSection />
        <RestaurantsSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;