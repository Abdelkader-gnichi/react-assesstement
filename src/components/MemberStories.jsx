// src/components/MemberStories.jsx
// import React from 'react';
// import './MemberStories.css';

const MemberStories = () => {
  return (
    <section className="member-stories">
      <h2>Member stories</h2>
      <div className="stories">
        <div className="story">
          <h3>John&apos;s Story</h3>
          <p>Non arcu risus quis varius quam quisque. Omare suspendisse sed nisi lacus.</p>
          <button>Read more</button>
        </div>
        <div className="story">
          <h3>The Journey</h3>
          <p>Proin nibh nisi condimentum id venenatis a condimentum vitae sapien.</p>
          <button>Read more</button>
        </div>
      </div>
    </section>
  );
};

export default MemberStories;