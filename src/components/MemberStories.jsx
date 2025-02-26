import './styles/MemberStories.css';
import johnsStoryImg from '../assets/images/johns-story.png';
import journeyImg from '../assets/images/journey.png';
import catchDayImg from '../assets/images/catch-day.png';
import troutTalesImg from '../assets/images/trout-tales.png';

function MemberStories() {
  const stories = [
    {
      id: 1,
      title: "John's Story",
      description: "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
      image: johnsStoryImg,
    },
    {
      id: 2,
      title: "The Journey",
      description: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      image: journeyImg,
    },
    {
      id: 3,
      title: "Catch Day",
      description: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      image: catchDayImg,
    },
    {
      id: 4,
      title: "Trout Tales",
      description: "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Vulputat commodo sed",
      image: troutTalesImg,
    },
  ];

  return (
    <section className="member-stories">
      <div className="container">
        <h2 className="section-title">Member stories</h2>
        
        <div className="stories-grid">
          {stories.map((story) => (
            <div className="story-card" key={story.id}>
              <div className="story-image">
                <img src={story.image} alt={story.title} />
              </div>
              <div className="story-content">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemberStories;