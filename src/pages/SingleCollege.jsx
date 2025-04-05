import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCollege.css';
import  collegesData  from '../DATA.json';
const SingleCollege = () => {
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const { id } = useParams();

  function filterById(jsonObject, id) 
{return jsonObject.filter(function(jsonObject) 
    {return (jsonObject['id'] === parseInt(id));})[0];
}


  useEffect(() => {
    // Find the college with the matching id
    const foundCollege = filterById(collegesData,id);
    
    if (foundCollege) {
      setCollege(foundCollege);
    }
    
    setLoading(false);
  }, [id, collegesData]);

  if (loading) {
    return <div className="loading">Loading college information...</div>;
  }

  if (!college) {
    return <div className="error">College not found</div>;
  }

  return (
    <div className="college-container">
      <header className="college-header">
        <div className="header-content">
          <h1>{college.name}</h1>
          <div className="college-meta">
            <span className="location">{college.location}</span>
            <span className="established">Est. {college.country}</span>
          </div>
        </div>
        <div className="college-image">
          <img src={college.image} alt={college.name} />
        </div>
      </header>

      <section className="college-overview">
        <h2>About {college.name}</h2>
        <p className="description">{college.description}</p>
        <p className="description">{college.largeDescription}</p>
        
        <div className="college-stats">
          <div className="stat-item">
            <span className="stat-value">{college.programCount}</span>
            <span className="stat-label">Faculty</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{college.ranking}</span>
            <span className="stat-label">Ranking</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{college.tuitionRange}$</span>
            <span className="stat-label">Fees</span>
          </div>
        </div>
      </section>

    

      <section className="contact-section">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <div className="contact-item">
            <strong>Address:</strong>
            <p>{college.location}</p>
          </div>
          <div className="contact-item">
            <strong>Email:</strong>
            <p>www.college.com</p>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong>
            <p>8750383938</p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default SingleCollege;