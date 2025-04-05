import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years in education technology, Sarah founded our platform to transform how students find their ideal college match.",
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/ranbir-kapoor-263020259-16x9_0.jpg?VersionId=rrtBcaGqvx5CyHTyn.b1wpJhLy355Y8q&size=690:388"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael brings 12 years of experience in building scalable web applications and leads our engineering team.",
      image: "https://cdn.britannica.com/53/252753-050-BF625495/Actor-India-Shah-Rukh-Khan-2011.jpg"
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Head of College Relations",
      bio: "Former university admissions officer with a passion for connecting students with their perfect educational fit.",
      image: "https://assets.teenvogue.com/photos/672056559d2eba24aead5f5c/master/w_1600,c_limit/FINAL-TeenVogue_AlexConsani_WM_NOVDEC2024-4.jpg"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Lead UX Designer",
      bio: "David crafts intuitive user experiences that make navigating complex college decisions feel simple and clear.",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBq-vx2BxCs9OqcoV_MxYf3g8RlevFWgro5LnZUp2v0Rl9kT92ZqtipHUv_sK0NlQBfAfBzLYBbMVQ7iZo8VAUmB3mg7NFmVJ8Ze0FZ88"
    }
  ];

  // Stats data
  const stats = [
    { id: 1, value: "4000+", label: "Colleges" },
    { id: 2, value: "250,000+", label: "Student Users" },
    { id: 3, value: "98%", label: "Satisfaction Rate" },
    { id: 4, value: "85%", label: "Match Success" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About StudyAbroad Connect</h1>
          <p className="hero-subtitle">Guiding students toward their perfect educational journey since 2000.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section story-section">
        <div className="about-container">
          <div className="section-header">
            <h2>Our Story</h2>
            <div className="section-divider"></div>
          </div>
          <div className="story-content">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW0lMjB3b3JrfGVufDB8fDB8fHww" alt="CollegeFinder team working" />
            </div>
            <div className="story-text">
              <p>Founded in 2020, CollegeFinder began with a simple mission: to make the college selection process more accessible, transparent, and personalized for students everywhere.</p>
              <p>What started as a small project by our founder Sarah Johnson quickly evolved into a comprehensive platform used by hundreds of thousands of students nationwide. We recognized that choosing the right college is one of life's most important decisions, yet the process was often overwhelming and filled with uncertainty.</p>
              <p>Today, we're proud to be the leading college discovery platform that combines powerful search tools, authentic student reviews, and personalized recommendations to help every student find their perfect college match.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <div className="about-container">
          <div className="section-header">
            <h2>Our Mission</h2>
            <div className="section-divider"></div>
          </div>
          <div className="mission-content">
            <div className="mission-statement">
              <p className="mission-text">We empower students to make confident college decisions by providing comprehensive, unbiased information and personalized guidance.</p>
            </div>
            <div className="values-container">
              <div className="value-card">
                <div className="value-icon">📊</div>
                <h3>Data-Driven</h3>
                <p>We believe in the power of accurate, up-to-date information to guide important decisions.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Student-First</h3>
                <p>Every feature and piece of content is designed with students' needs as our top priority.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔍</div>
                <h3>Transparency</h3>
                <p>We present colleges honestly, showing both strengths and areas for improvement.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌍</div>
                <h3>Accessibility</h3>
                <p>Quality education guidance should be available to all students regardless of background.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section stats-section">
        <div className="about-container">
          <div className="stats-grid">
            {stats.map(stat => (
              <div className="stat-item" key={stat.id}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <div className="about-container">
          <div className="section-header">
            <h2>Our Team</h2>
            <div className="section-divider"></div>
          </div>
          <p className="team-intro">Meet the dedicated experts working behind the scenes to simplify your college search journey.</p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-member" key={member.id}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect College?</h2>
            <p>Join thousands of students who have discovered their ideal educational path with CollegeFinder.</p>
            <a href='/colleges'> 
            <button className="cta-button">Start Exploring Colleges</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;