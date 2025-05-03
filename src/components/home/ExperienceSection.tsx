import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 'delivery',
      title: 'Delivery',
      description: 'Order food to your door',
      icon: '🛵',
      color: 'bg-red-50',
      link: '/search?filter=delivery'
    },
    {
      id: 'dining-out',
      title: 'Dining Out',
      description: 'View the finest dining venues',
      icon: '🍽️',
      color: 'bg-blue-50',
      link: '/search?filter=dine-out'
    },
    {
      id: 'nightlife',
      title: 'Nightlife',
      description: 'Explore the city\'s top nightlife outlets',
      icon: '🍻',
      color: 'bg-purple-50',
      link: '/search?filter=nightlife'
    },
    {
      id: 'takeaway',
      title: 'Takeaway',
      description: 'Grab and go options',
      icon: '🥡',
      color: 'bg-green-50',
      link: '/search?filter=takeaway'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          How do you want to experience Zomato today?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={experience.link}
                className="block group"
              >
                <div className={`rounded-lg overflow-hidden ${experience.color} transition-transform group-hover:scale-[1.02] duration-300`}>
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="text-5xl mb-4">{experience.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{experience.title}</h3>
                    <p className="text-sm text-gray-600">{experience.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;