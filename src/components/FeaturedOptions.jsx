import { useState } from 'react';
import OptionItem from './OptionItem';
import './styles/FeaturedOptions.css';
import exploreImg from '../assets/images/explore.png';

function FeaturedOptions() {
  const [expanded, setExpanded] = useState({
    explore: true,
    experiences: false,
    gear: false,
  });

  const toggleExpand = (option) => {
    setExpanded({
      ...expanded,
      [option]: !expanded[option],
    });
  };

  const options = [
    {
      id: 'explore',
      title: 'Explore Fly Fishing',
      description: 'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
      image: exploreImg,
    },
    {
      id: 'experiences',
      title: 'Fly Fishing Experiences',
      description: 'Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque',
      image: null,
    },
    {
      id: 'gear',
      title: 'Gear Up and Catch More',
      description: 'In metus vulputate eu scelerisque felis. Suspendisse. Nunc scelerisque viverra mauris in aliquam sem.',
      image: null,
    },
  ];

  return (
    <section className="featured-options">
      <div className="container">
        <h2 className="section-title">Featured options</h2>
        <div className="options-list">
          {options.map((option) => (
            <OptionItem 
              key={option.id}
              title={option.title}
              description={option.description}
              image={option.image}
              isExpanded={expanded[option.id]}
              toggleExpand={() => toggleExpand(option.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedOptions;